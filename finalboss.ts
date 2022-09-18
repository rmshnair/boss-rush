namespace SpriteKind {
    export const FinalBossProjectile = SpriteKind.create();
}

enum BossState {
    Firing,
    MovingToCenter,
    Cloning,
    CloneFiring
}

class Timer {
    time: number;

    setTime(timeMillis: number) {
        this.time = game.runtime() + timeMillis;
    }

    isDone() {
        return !this.time || game.runtime() > this.time;
    }
}

//% block="create final boss"
//% color="#1446A0"
//% blockNamespace="game"
function createFinalBoss() {

    const BOSS_SPEED = 100;
    const BOSS_PROJECTILE_SPEED = 150;
    const BOSS_FIRE_INTERVAL = 300;
    const BOSS_MAX_HEALTH = 500;

    const BOSS_CLONE_THRESHOLD = BOSS_MAX_HEALTH - 400;

    const fireTimer = new Timer();

    let bossHealth = BOSS_MAX_HEALTH;
    statusbar.max = BOSS_MAX_HEALTH;
    statusbar.value = BOSS_MAX_HEALTH;
    statusbar.setColor(0x2, 0x1)

    sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite: Sprite, otherSprite: Sprite) {
        sprite.destroy();

        if (sprites.readDataNumber(otherSprite, "health")) {
            sprites.changeDataNumberBy(otherSprite, "health", -1);
            if (sprites.readDataNumber(otherSprite, "health") === 0) {
                otherSprite.destroy();
            }
        }
        else {
            bossHealth -= 1;
            statusbar.value -= 1;

            if (bossHealth === 0) {
                game.over(true);
            }
        }
    })

    sprites.onOverlap(SpriteKind.FinalBossProjectile, SpriteKind.Player, function (sprite: Sprite, otherSprite: Sprite) {
        sprite.destroy();
        info.changeLifeBy(-1)
    })

    function createBossSprite(health?: number) {
        const i = image.create(10, 10);
        i.fill(15);
        const boss = sprites.create(i, SpriteKind.Enemy);

        if (health) {
            sprites.setDataNumber(boss, "health", health);
        }

        boss.setFlag(SpriteFlag.BounceOnWall, true);


        return boss;
    }

    function createBossProjectile(src: Sprite) {
        const proj = sprites.createProjectileFromSprite(img`
            b b b b
            b 3 3 b
            b 3 3 b
            b b b b
        `, src, 0, BOSS_PROJECTILE_SPEED);

        proj.setKind(SpriteKind.FinalBossProjectile);

        return proj;
    }

    const theBoss = createBossSprite();
    theBoss.y = 50
    theBoss.vx = -BOSS_SPEED

    let currentState = BossState.Firing;



    game.onUpdate(function () {
        if (currentState == BossState.Firing || currentState == BossState.CloneFiring) {
            if (fireTimer.isDone()) {
                for (const sprite of sprites.allOfKind(SpriteKind.Enemy)) {
                    createBossProjectile(sprite);
                }
                fireTimer.setTime(BOSS_FIRE_INTERVAL)
            }
        }
    })

    forever(function () {
        if (bossHealth < BOSS_CLONE_THRESHOLD && currentState === BossState.Firing) {
            currentState = BossState.MovingToCenter;
            const angleToCenter = Math.atan2(60 - theBoss.y, 80 - theBoss.x);
            theBoss.setVelocity(BOSS_SPEED * Math.cos(angleToCenter), BOSS_SPEED * Math.sin(angleToCenter))
        }
        if (currentState == BossState.MovingToCenter && Math.sqrt((theBoss.x - 80) ** 2 + (theBoss.y - 60) ** 2) < 2) {
            currentState = BossState.Cloning;
            theBoss.setVelocity(0, 0);

            const clone1 = createBossSprite(10);
            const clone2 = createBossSprite(10);

            const chance = Math.randomRange(0, 2);

            if (chance === 0) {
                theBoss.y = 45;
                clone1.y = 60;
                clone2.y = 75;
            }
            else if (chance === 1) {
                clone1.y = 45;
                theBoss.y = 60;
                clone2.y = 75;
            }
            else {
                clone1.y = 45;
                clone2.y = 60;
                theBoss.y = 75;
            }

            for (const sprite of sprites.allOfKind(SpriteKind.Enemy)) {
                sprite.y -= 10
            }

            theBoss.vx = Math.percentChance(50) ? BOSS_SPEED : -BOSS_SPEED;
            clone1.vx = -theBoss.vx;
            clone2.vx = theBoss.vx;

            currentState = BossState.CloneFiring
        }
    })
}