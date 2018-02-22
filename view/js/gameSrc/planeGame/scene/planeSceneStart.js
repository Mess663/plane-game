class PlaneSceneStart extends Sence {
    constructor(game) {
        super(game);
        this.setup(game);
    }

    setup(game) {
        let o = this;
        game.registKey('e', function() {
            o.startGame();
        });
    }

    draw() {
        let c = this.c;
        // 设置字体样式
        c.font = "50px Courier New";
        // 设置字体填充颜色
        c.fillStyle = "white";
        // 从坐标点(50,50)开始绘制文字
        c.fillText("press E to  start", 50, 300);
    }

    update() {
        
    }

    startGame() {
        if (this.game.sence !== this) return;
        window.pause = false;
        this.game.switchSence(new PlaneScene(this.game));
    }
}