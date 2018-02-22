class Enemy {
    constructor(game) {
        this.game = game;
        this.img = game.aImg.enemy;
        this.w = this.img.width*.5;
        this.h = this.img.height*.5;
        this.x = Math.random() * game.w;
        this.y = -this.h;
        this.speed = 2;
    }

    fly() {
        this.y += this.speed;
    }

    isExist() {
        return this.y >= this.game.h + this.h ? false : true;
    }

    collide(role) {
        let o = this;
        return (o.y - role.y <= o.h && o.y - role.y >= -o.h) && 
                (o.x - role.x <= o.w && o.x - role.x >= -o.w);
    }

    boom() {
        let game = this.game,
            o = this;
        
        return {
            img: game.aImg.boom,
            x: o.x,
            y: o.y,
            life: 15
        }
    }
}