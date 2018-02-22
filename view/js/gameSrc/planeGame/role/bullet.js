class Bullet {
    constructor(game, plane) {
        this.img = game.aImg.bullet;
        this.x = plane.x;
        this.y = plane.y;  
    }

    fly() {
        this.speed = controller.bullet;
        this.y -= this.speed;
    } 
     
    isExist() {
        return this.y <= 0 ? false : true;
    }
}