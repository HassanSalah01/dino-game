class Shape {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.w = obj.w;
    this.r = obj.r;
    this.ctx = obj.ctx;
    this.color = obj.color;
  }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }

  setW(w) {
    this.w = w;
  }

  setR(r) {
    this.r = r;
  }

  setCtx(ctx) {
    this.ctx = ctx;
  }

  setColor(color) {
    this.color = color;
  }

  // Getters
  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getW() {
    return this.w;
  }

  getR() {
    return this.r;
  }

  getCtx() {
    return this.ctx;
  }

  getColor() {
    return this.color;
  }

  draw() {
    // this.ctx.fillStyle = this.color;
    // this.ctx.fillRect(this.x, this.y, this.r, this.w);
  }
  update() {
    this.x += 1;
  }
  // draw() {
  //   if (this.border == false) {
  //     this.ctx.fillStyle = this.color;
  //     this.ctx.fillRect(this.x, this.y, this.r, this.w);
  //     this.ctx.font = "20px Arial";
  //     this.ctx.fillStyle = "black";
  //     // console.log(this.text);
  //     this.ctx.fillText(this.text, this.x + 20, this.y + 30);
  //     this.ctx.globalAlpha = 0.5;
  //   } else {
  //     console.log("yessssssss");
  //     this.ctx.fillStyle = this.color;
  //     this.ctx.fillRect(this.x, this.y, this.r, this.w);
  //     this.ctx.lineWidth = 5;
  //     this.ctx.strokeStyle = "white";
  //     this.ctx.strokeRect(this.x, this.y, this.r, this.w);
  //   }
  // }
}
