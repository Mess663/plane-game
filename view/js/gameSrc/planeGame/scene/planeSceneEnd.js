class PlaneSceneEnd extends Sence {
    constructor(game) {
        super(game);
        this.setup(game);
    }

    setup(game) {
        let o = this;
        // 注册按键
        game.registKey('q', function() {
            o.restartGame();
        });
    }

    draw() {
        let c = this.c;
        // 设置字体样式
        c.font = "100px Courier New";
        // 设置字体填充颜色
        c.fillStyle = "blue";
        // 从坐标点(50,50)开始绘制文字
        c.fillText("GAME OVER", 50, 300);
        c.font = "50px Courier New";
        c.fillText("press Q to reset", 100, 420);
    }

    update() {
        
    }

    restartGame() {
        let game = this.game;
        if (game.sence !== this) return;
        game.switchSence(new PlaneScene(game));
    }
}