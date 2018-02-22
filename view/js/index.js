window.onload = function() {
    window.pause = false;

    function initGame(whichGame) {
        // 创造游戏(存入帧数)
        let game = new Game(60);
        // 获取开始场景
        let startSence = eval(whichGame.startSence)
        // 创建场景
        let sence = new startSence(game);
        game.sence = sence;
       
        // 开始渲染
        utils.loadedImg(DATA.planeGame.aImg, game.render.bind(game));
    }

    let _main = function() {
        // debug模式
        utils.enableDebug(true);
      
        // 初始化游戏
        initGame(DATA.planeGame)
    }
   
    // 开始游戏
    _main();
}