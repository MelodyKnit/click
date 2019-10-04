const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const isNumber = 700;
const myDot = [];
const size = { x: innerWidth / 2, y: innerHeight / 2 };
document.body.appendChild(canvas);
document.body.style.cssText = 'margin:0;padding:0;overflow:hidden;'
class getDot {
    constructor(x, y, r, mx, my, mr, colors) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.sr = r;
        this.mx = mx;
        this.my = my;
        this.mr = mr;
        this.c = colors
    };
    clearDot() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        ctx.fillStyle = this.c;
        ctx.fill();
    };
    moveDot() {
        if (this.x > innerWidth - this.r || this.x < this.r) this.mx = -this.mx;
        if (this.y > innerHeight - this.r || this.y < this.r) this.my = -this.my;
        if (this.x > size.x - 100 && this.x < size.x + 100 && this.y > size.y - 100 && this.y < size.y + 100) {
            if (this.r < 100) this.r += this.mr;
        } else { if (this.r > 10) this.r -= this.mr; }
        this.x += this.mx;
        this.y += this.my;
        this.clearDot()
    };
};
for (let i = 0; i < isNumber; i++) {
    var r = Math.random() * 20,
        x = Math.random() * innerWidth,
        y = Math.random() * innerHeight,
        mx = Math.random() * 10 - 5,
        my = Math.random() * 10 - 5,
        mr = 5,
        colors = 'rgba(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ',.6)';
    myDot[i] = new getDot(x, y, r, mx, my, mr, colors);
    myDot[i].clearDot()
}

function animn() {
    window.requestAnimationFrame(animn);
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < isNumber; i++) myDot[i].moveDot();
}
animn()
window.addEventListener('mousemove', (e) => {
    size.x = e.x;
    size.y = e.y;
});