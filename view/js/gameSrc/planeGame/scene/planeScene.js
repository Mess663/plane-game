class PlaneScene extends Sence {
    constructor(game) {
        super(game);
        this.setup(game);
    }

    setup(game) {
        // 创建元素
        this.myPlane = new MyPlane(game);
        this.booms = [];
        this.bullets = [];
        this.enemys = [];
        let myPlane = this.myPlane,
            o = this;

        // 注册按键
        game.registKey('a', function() {
            myPlane.moveA();
        });
        game.registKey('d', function() {
            myPlane.moveD();
        });
        game.registKey('w', function() {
            myPlane.moveW();
        });
        game.registKey('s', function() {
            myPlane.moveS();
        });
        // 动态添加元素
        setInterval(function() {
            if (window.pause) return;
            o.bullets.push(new Bullet(game, o.myPlane));
        }, 400);
        setInterval(function() {
            if (window.pause) return;
            o.enemys.push(new Enemy(game));
        }, 1000);
    }

    draw() {
        let game = this.game,
            o = this,
            roles = [o.myPlane, o.bullets, o.enemys, o.booms];
        
        for (let i=0,len=roles.length; i<len; i++) {
            game.setImgOnCanvas(roles[i]);
        }
    }

    update() {
        let game = this.game,
            boomImg =  game.aImg.boom,
            o = this;
        // update bullet
        for (let i=0,len=o.bullets.length; i<len; i++) {
            if (!o.bullets[i]) return;
            o.bullets[i].fly();
            // 检测碰撞
            for (let j=0,len=o.enemys.length; j<len; j++) {
                if (o.enemys[j].collide(o.bullets[i])) { // 撞到子弹
                    // 加入爆炸队列
                    o.booms.push(o.enemys[j].boom());
                    // 收拾敌机&子弹尸体
                    o.killEnemy(j);
                    o.killBullet(i); 
                    utils.setKillController();
                    break;
                } else if (o.enemys[j].collide(o.myPlane)) { // 撞到飞机
                    // gameover
                    game.switchSence(new PlaneSceneEnd(game, o.img));
                }
            }
            if (!o.bullets[i]) break;
            // 检测子弹出边界
            if (!o.bullets[i].isExist()) {
                o.killBullet(i);
            }
        }
        // update boom
        for (let i=0,len=o.booms.length; i<len; i++) {
            if (!o.booms[i]) break;
            o.booms[i].life -= 1;
            if (o.booms[i].life < 1) {
                o.killBoom(i);
            }
        }
        // update enemy
        for (let i=0,len=o.enemys.length; i<len; i++) {
            if (!o.enemys[i]) break;
            o.enemys[i].fly();
            if (!o.enemys[i].isExist()) {
                o.killEnemy(i);
            }
        }
    }

    killEnemy(i) {
        this.enemys.splice(i, 1);
    }

    killBullet(i) {
        this.bullets.splice(i, 1);
    }

    killBoom(i) {
        this.booms.splice(i, 1);
    } 
}