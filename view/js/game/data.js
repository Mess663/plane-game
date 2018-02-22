/*

DATA里存放各个游戏需要的数据：

{
    game name(游戏名): {
        aImg（游戏所需要加载的图片路径）
        startSence(游戏开始场景的对象),
        width（游戏画面宽）
        height（游戏画面高）
    }    
}

*/ 


let DATA = {
    planeGame: {
        aImg: {
            enemy: './img/enemy2.png',
            myPlane: './img/me.png',
            bullet: './img/bullet.png',
            boom: './img/boom.png',
            partical: './img/partical.png'
        },
        startSence: 'PlaneSceneStart',
        width: 600,
        height: 550
    }
}