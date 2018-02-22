
/*

杂七杂八的工具

*/

const log = console.log.bind(console);

// 速度控制单例
let controller = {
    bullet: 8,
    kill: 0
}

let utils = {
    imgFromPath: function(url) {
        var img = new Image();
        img.src = url;
        return img;
    },

    enableDebug: function(isEnable) {
        if (!isEnable) return;

        window.addEventListener('keydown', function(e) {
            if (e.key === 'f') {
                window.pause = !window.pause;
            }
        });

        this.setSpeedController();
    },

    loadedImg: function(aImg, fn) {
        let imgs = Object.keys(aImg),
            n = 0,
            role = {};
        for (let i=0,len=imgs.length; i<len; i++) {
            let img = utils.imgFromPath(aImg[imgs[i]]);
            img.onload = function() {
                n++;
                role[imgs[i]] = img;
                if (n === len) {
                    fn(role);
                }
            }
        }
    },

    setSpeedController: function() {
        this.bindAll('.controller input', 'input', function(event) {
            let target = event.target;
            let value = target.dataset.speed;
            eval(value + '=' + target.value);
        })
    },

    setKillController: function() {
        let el = document.getElementById('kill');
        controller.kill += 1;
        el.innerText = controller.kill;
    },
     
    bindAll: function(el, eventName, fn) {
        let e = document.querySelectorAll(el);
        for (var i=0,len=e.length; i<len; i++) {
            e[i].addEventListener(eventName, function(event) {
                fn(event)
            })
        }
    },

    randomNum: function(n1, n2) {
        let neg = Math.random() < 0.5 ? -1 : 1;
        let returnNum = (Math.random()*(n2-n1) + n1);
        return n1 < 0 ? returnNum*neg : returnNum;
    }
}
