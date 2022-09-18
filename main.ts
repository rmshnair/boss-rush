namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const BossProjectile = SpriteKind.create()
    export const Camera = SpriteKind.create()
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.BossProjectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 10)
    info.changeLifeBy(-1)
})
function createBoss (current: number) {
    if (current == 0) {
        bossSpeed = 50
        bossHealth = 100
        timeBetweenBossFire = 100
        timeBetweenBossMove = 2000
        theBoss = sprites.create(img`
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            888888888883388888888888
            333333333333333333333333
            888888888883388888888888
            `, SpriteKind.Boss)
        theBoss.setPosition(145, 58)
        theBoss.setVelocity(0, 50)
        resetHealth()
        resetPlayerHealth()
    } else if (current == 1) {
        if (bossHealth == 0) {
            bossHealth = 200
            resetHealth()
            resetPlayerHealth()
        }
        tiles.setTilemap(tilemap`level1`)
        cameraSpeed = 20
        theBoss = sprites.create(img`
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            88888888888888888
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            88888888888888888
            88888888888888888
            88888888888888888
            88888888888888888
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            88888888888888888
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            `, SpriteKind.Boss)
        theBoss.setFlag(SpriteFlag.GhostThroughWalls, true)
        theBoss.setPosition(12, 59)
        lastBossFireTime = game.runtime()
        tiles.placeOnTile(thePlayer, tiles.getTileLocation(7, 6))
        animation.runImageAnimation(
        theBoss,
        [img`
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            88888888888888888
            88888888888888888
            88888888888888888
            88888888888888888
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            `,img`
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            `,img`
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            88888888888888888
            88888888888888888
            88888888888888888
            88888888888888888
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            `,img`
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            `,img`
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            88888888888888888
            88888888888888888
            88888888888888888
            88888888888888888
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            `,img`
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            .................
            `,img`
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            88888888888888888
            88888888888888888
            88888888888888888
            88888888888888888
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            22222222822222222
            `],
        150,
        false
        )
        statusbar.setColor(6, 1)
        initialize_camera()
    } else if (current == 2) {
        bossHealth = 300
        bossHealthThreshold = bossHealth / 3
        tiles.setTilemap(tilemap`level6`)
        tiles.placeOnTile(thePlayer, tiles.getTileLocation(2, 4))
        bossLocations = tiles.getTilesByType(assets.tile`tile3`)
        currentFireIndex = 0
        lastBossFireTime = game.runtime()
        statusbar.setColor(4, 1)
        resetHealth()
        initialize_chase()
        resetPlayerHealth()
    } else if (current == 3) {
        bossHealth = 400
        darylHorizontalSpeed = 60
        tiles.setTilemap(tilemap`level7`)
        theBoss = sprites.create(assets.image`daryl`, SpriteKind.Boss)
        theBoss.ay = gravity
        tiles.placeOnTile(theBoss, tiles.getTileLocation(9, 6))
        theBoss.right = 155
        statusbar.setColor(8, 1)
        resetHealth()
        resetPlayerHealth()
    } else {
        resetHealth()
        resetPlayerHealth()
        createFinalBoss()
    }
}
function initialize_chase () {
    bossSpawn = bossLocations.shift()
    theBoss = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.Boss)
    tiles.placeOnTile(theBoss, bossSpawn)
    animation.runImageAnimation(
    theBoss,
    assets.animation`chase animation`,
    150,
    true
    )
    theBoss.lifespan = 4000
    bossLocations.push(bossSpawn)
    lastBossFireTime += 2000
}
function clearStage () {
    theBoss.destroy()
    for (let value of sprites.allOfKind(SpriteKind.BossProjectile)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Projectile)) {
        value2.destroy()
    }
    for (let value22 of sprites.allOfKind(SpriteKind.Camera)) {
        value22.destroy()
    }
    timeBetweenFire = 100
}
function darylThrow (dir: number) {
    projectile = sprites.createProjectileFromSprite(assets.image`daryl projectile`, theBoss, 2 * (dir * darylHorizontalSpeed), 0)
    projectile.setKind(SpriteKind.BossProjectile)
    projectile = sprites.createProjectileFromSprite(assets.image`daryl projectile`, theBoss, 2 * (dir * darylHorizontalSpeed), -74)
    projectile.setKind(SpriteKind.BossProjectile)
    pause(500)
}
function resetHealth () {
    statusbar.max = bossHealth
    statusbar.value = bossHealth
}
function resetPlayerHealth () {
    info.setLife(20)
}
function darylDash (dir: number) {
    theBoss.vx = 2 * (dir * darylHorizontalSpeed)
    pause(200)
}
sprites.onDestroyed(SpriteKind.Boss, function (sprite) {
    if (currentBoss == 2 && bossHealth > 0) {
        initialize_chase()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    clearStage()
    createBoss(currentBoss)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(7, 6))
    resetPlayerHealth()
    resetHealth()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.BossProjectile, function (sprite, otherSprite) {
    if (currentBoss == 1) {
        sprite.destroy(effects.disintegrate, 10)
        sprites.changeDataNumberBy(otherSprite, "health", -1)
        if (sprites.readDataNumber(otherSprite, "health") == 0) {
            otherSprite.destroy()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    if (currentBoss == 1) {
        if (game.runtime() > lastBossFireTime + 1000) {
            info.changeLifeBy(-1)
            camera_target.vx = cameraSpeed / 4
            scene.cameraShake(4, 500)
            pause(1000)
            camera_target.vx = cameraSpeed
        }
    } else {
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
        pause(500)
    }
    if (currentBoss == 3 && sprites.readDataNumber(sprite, "health") == 0) {
        resetHealth()
        resetPlayerHealth()
        createBoss(currentBoss)
    }
})
function darylJump (dir: number) {
    theBoss.vy = Math.randomRange(1.5 * jumpVelocity, jumpVelocity)
    theBoss.vx = dir * darylHorizontalSpeed
}
function initialize_camera () {
    camera_target = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Camera)
    camera_target.setFlag(SpriteFlag.Ghost, true)
    camera_target.setFlag(SpriteFlag.Invisible, true)
    camera_target.setVelocity(cameraSpeed, 0)
    scene.cameraFollowSprite(camera_target)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 10)
    bossHealth += -1
    statusbar.value += -1
    if (bossHealth == 0) {
        nextBoss()
    } else if (bossHealth == 50 && currentBoss == 0) {
        timeBetweenBossMove = 1000
        bossSpeed = 100
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
        thePlayer.vy = jumpVelocity
    }
})
let fireAngle = 0
let lastFireTime = 0
let isFacingLeft = false
let projectile2: Sprite = null
let darylDir = 0
let chosenAction = 0
let isBossAttacking = false
let camera_target: Sprite = null
let projectile: Sprite = null
let bossSpawn: tiles.Location = null
let darylHorizontalSpeed = 0
let currentFireIndex = 0
let bossLocations: tiles.Location[] = []
let bossHealthThreshold = 0
let lastBossFireTime = 0
let cameraSpeed = 0
let theBoss: Sprite = null
let timeBetweenBossMove = 0
let timeBetweenBossFire = 0
let bossHealth = 0
let bossSpeed = 0
let statusbar: StatusBarSprite = null
let currentBoss = 0
let thePlayer: Sprite = null
let jumpVelocity = 0
let timeBetweenFire = 0
let gravity = 0
tiles.setTilemap(tilemap`level5`)
gravity = 300
let jumpHeight = 34
let playerSpeed = 100
let projectileVelocity = 150
timeBetweenFire = 100
jumpVelocity = 0 - Math.sqrt(2 * (gravity * jumpHeight))
thePlayer = sprites.create(assets.image`player character`, SpriteKind.Player)
thePlayer.ay = gravity
controller.moveSprite(thePlayer, playerSpeed, 0)
tiles.placeOnTile(thePlayer, tiles.getTileLocation(4, 4))
info.setLife(20)
currentBoss = 0
statusbar = statusbars.create(100, 11, StatusBarKind.Health)
statusbar.setColor(12, 1)
statusbar.setBarBorder(1, 3)
statusbar.right = 160
statusbar.top = 0
statusbar.setFlag(SpriteFlag.RelativeToCamera, true)
createBoss(currentBoss)
forever(function () {
    if (currentBoss == 0) {
        if (theBoss.isHittingTile(CollisionDirection.Bottom) || theBoss.isHittingTile(CollisionDirection.Top)) {
            isBossAttacking = true
            pause(timeBetweenBossMove)
            isBossAttacking = false
            if (theBoss.isHittingTile(CollisionDirection.Bottom)) {
                theBoss.vy = 0 - bossSpeed
            } else {
                theBoss.vy = bossSpeed
            }
            pause(100)
        }
    } else if (currentBoss == 3) {
        if (theBoss.isHittingTile(CollisionDirection.Bottom)) {
            theBoss.vx = 0
            chosenAction = Math.randomRange(0, 2)
            darylDir = 1
            if (thePlayer.x < theBoss.x) {
                darylDir = -1
            }
            if (chosenAction == 0) {
                theBoss.sayText("Daryl Throw!", 300, false)
                pause(500)
                darylThrow(darylDir)
            } else if (chosenAction == 1) {
                theBoss.sayText("Daryl Dash!", 300, false)
                pause(500)
                darylDash(darylDir)
            } else {
                theBoss.sayText("Daryl Jump!", 300, false)
                pause(500)
                darylJump(darylDir)
            }
        }
    }
})
game.onUpdateInterval(3000, function () {
    if (currentBoss == 1) {
        projectile2 = sprites.createProjectileFromSprite(assets.image`bertha projectile`, theBoss, 10, 0)
        projectile2.setKind(SpriteKind.BossProjectile)
        projectile2.follow(thePlayer, 35)
        sprites.setDataNumber(projectile2, "health", 12)
    }
})
game.onUpdate(function () {
    if (thePlayer.vx < 0) {
        isFacingLeft = true
    } else if (thePlayer.vx > 0) {
        isFacingLeft = false
    }
    if (controller.A.isPressed()) {
        if (game.runtime() > lastFireTime + timeBetweenFire) {
            if (controller.B.isPressed()) {
                projectile = sprites.createProjectileFromSprite(assets.image`player projectile`, thePlayer, 0, 0 - projectileVelocity)
            } else if (isFacingLeft) {
                projectile = sprites.createProjectileFromSprite(assets.image`player projectile`, thePlayer, 0 - projectileVelocity, 0)
            } else {
                projectile = sprites.createProjectileFromSprite(assets.image`player projectile`, thePlayer, projectileVelocity, 0)
            }
            projectile.vx += thePlayer.vx
            lastFireTime = game.runtime()
        }
    }
})
game.onUpdate(function () {
    if (currentBoss == 1) {
        if (thePlayer.right + 16 < scene.cameraLeft()) {
            clearStage()
            createBoss(currentBoss)
            tiles.placeOnTile(thePlayer, tiles.getTileLocation(7, 4))
        }
    }
})
game.onUpdate(function () {
    if (currentBoss == 0) {
        if (isBossAttacking) {
            if (game.runtime() > lastBossFireTime + timeBetweenBossFire) {
                projectile = sprites.createProjectileFromSprite(assets.image`albert projectile`, theBoss, -75, 0)
                projectile.setKind(SpriteKind.BossProjectile)
                projectile.y += Math.randomRange(-16, 16)
                lastBossFireTime = game.runtime()
            }
        }
    } else if (currentBoss == 1) {
        theBoss.left = scene.cameraLeft() + 12
        theBoss.y = Math.map(Math.sin(game.runtime() / 1000), -1, 1, 32, scene.screenHeight() - 32)
    } else if (currentBoss == 2) {
        if (game.runtime() > lastBossFireTime + timeBetweenBossFire) {
            animation.stopAnimation(animation.AnimationTypes.All, theBoss)
            theBoss.setImage(assets.image`chase`)
            if (bossHealth > bossHealthThreshold) {
                fireAngle = 0.7854 / 2 * currentFireIndex
                projectile = sprites.createProjectileFromSprite(assets.image`chase projectile`, theBoss, Math.cos(fireAngle) * projectileVelocity, Math.sin(fireAngle) * projectileVelocity)
                currentFireIndex += 1
                projectile.setKind(SpriteKind.BossProjectile)
            } else {
                for (let index = 0; index <= 7; index++) {
                    fireAngle = 0.7854 * index
                    projectile = sprites.createProjectileFromSprite(assets.image`chase projectile`, theBoss, Math.cos(fireAngle) * projectileVelocity, Math.sin(fireAngle) * projectileVelocity)
                    projectile.setKind(SpriteKind.BossProjectile)
                }
            }
            lastBossFireTime = game.runtime()
        }
    }
})
