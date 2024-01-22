class Player extends Shape {
  constructor(obj) {
    super(obj);
  }
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.r);
  }
}
