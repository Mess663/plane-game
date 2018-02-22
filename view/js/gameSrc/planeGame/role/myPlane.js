class MyPlane {
    constructor(game) {
        let o = this;
        this.game = game;
        this.img = game.aImg.myPlane;
        this.x = game.w/2;
        this.y = game.h - 50;
        this.speed = 5;
        this.w = o.img.width*.5;
        this.h = o.img.height*.5;
    }

    checkX(o) {
        if (o.x < 0) {
            o.x = 0;
        }else if (o.x >= this.game.w - o.w) {
            o.x = this.game.w - o.w;
        } 
    }

    checkY(o) {
        if (o.y < 0) {
            o.y = 0;
        } else if (o.y >= this.game.h - o.h) {
            o.y = this.game.h - o.h;
        }
    }

    moveA() {
        let o = this;
        o.x -= o.speed;
        o.checkX(o);
    }

    moveW() {
        let o = this;
        o.y -= o.speed;
        o.checkY(o);
    }

    moveD() {
        let o = this;
        o.x += o.speed;
        o.checkX(o);
    }

    moveS() {
        let o = this;
        o.y += o.speed;
        o.checkY(o);
    }
}