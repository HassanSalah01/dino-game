class Enemy extends Shape {
  constructor(obj) {
    super(obj);
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.r);
  }
  update() {
    this.x -= 6;
    if (this.x < 0) {
      this.r = Math.floor(Math.random() * (150 - 30 + 1)) + 30;
      // this.y -= this.r;
      console.log(this.r);
      if (this.r > 50) {
        console.log(this.r);
        this.y = 550 - this.r / 2;
      } else {
        this.y = 600 - this.r;
      }
      this.x = 700;
    }
  }
}
