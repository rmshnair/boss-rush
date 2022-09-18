//% block="next boss"
//% color="#1446A0"
//% blockNamespace="game"
function nextBoss() {
    clearStage()
    currentBoss += 1
    showBossImage(currentBoss)
    createBoss(currentBoss)
}

showBossImage(0)

function showBossImage(index: number) {
    game.pushScene()
    scene.setBackgroundColor(3)

    pause(500)

    const v = sprites.create(myAssetss.vs)
    v.x = 30;
    v.y = 100;

    let bossImage: Image;

    switch (index) {
        case 0: bossImage = myAssetss.albert; break;
        case 1: bossImage = myAssetss.bertha; break;
        case 2: bossImage = myAssetss.chase; break;
        case 3: bossImage = myAssetss.daryl; break;
    }

    pause(700)

    if (index < 4) {
        const bi = sprites.create(bossImage);
        bi.left = (screen.width >> 1) - (bi.width >> 1)

        if (index !== 1) {
            bi.top = (90 >> 1) - (bi.height >> 1)
        }
        else {
            bi.top = 10;
        }

        pause(1000)
    }
    else {
        sprites.create(myAssetss.question).setPosition(80, 60);
        pause(100);
        sprites.create(myAssetss.question).setPosition(55, 60);
        pause(100);
        sprites.create(myAssetss.question).setPosition(30, 60);
        pause(100);
        sprites.create(myAssetss.question).setPosition(105, 60);
        pause(100);
        sprites.create(myAssetss.question).setPosition(130, 60);
        pause(1000)
    }

    game.popScene()
}