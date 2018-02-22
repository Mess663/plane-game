/*

Game是整个游戏框架的操作中心，存放启动游戏的必要API操作

*/

class Game {
    constructor(fps) {
        this.setup(fps)
    }

    // init
    setup(fps) {
        let g = this;
        
        this.canvas = document.getElementById('main');
        this.ctx =  this.canvas.getContext('2d');
        this.w = this.canvas.width;
        this.h = this.canvas.height;
        this.fps = fps || 30;
        this.time = null;
        this.static = false;
    
        this.action = {};
        this.operate = {};
        
        // 保存按键状态
        window.addEventListener('keydown', function(e) {
            g.action[e.key] = true;
        })
        window.addEventListener('keyup', function(e) {
            g.action[e.key] = false;
        })
    }

    // 注册按键函数
    registKey(key, fn) {
        this.operate[key] = fn;
    }

    draw() {
        this.sence.draw();
    }

    update() {
        if (window.pause) return;
        this.sence.update();
    }

    runOperate() {
        if (window.pause) return;
        let g = this;
        let operate = Object.keys(g.operate);
        for (let i=0,len=operate.length; i<len; i++) {
           let ope = operate[i];
           if (g.action[ope]) {
               g.operate[ope]();
           }
        }
    }
    // 触发按键对应事件
    render(img) {
        let g = this;
        // 储存所有图片素材
        g.aImg = img;
        g.time = setInterval(function() {
            // 按键状态
            g.runOperate();
            g.update();
            g.ctx.clearRect(0,0,g.canvas.width,g.canvas.height);
            g.draw();
        }, 1000/this.fps);
    }

    setImgOnCanvas(imageObj) {
        let o = this;
        if (Object.prototype.toString.call(imageObj)=='[object Array]') {
            for (var i=0,len=imageObj.length; i<len; i++) {
                o.drawImg(imageObj[i]);
            }
        } else {
            o.drawImg(imageObj);
        }
    }

    drawImg(image) {
        let i = image,
            img = i.img;
        this.ctx.drawImage(img,i.x, i.y, img.width*.5, img.height*.5);
    }

    switchSence(s) {
        this.sence = s;
    }
}