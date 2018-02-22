class partical {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.img = game.aImg.partical;
        this.speed = 2;
        this.k = utils.randomNum(-2, 2);
    }

    fly() {
        this.x += this.speed;
        this.y = this.x*this.k;
        this.life -= 1;
    }
}

class particalSystem {
    constructor() {

    }
}