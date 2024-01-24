const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let player;
let background;
let floor;
let enemy;
let enemyXposition = 700;

const draw = () => {
  for (let i = 0; i < 5; i++) {
    enemy.push(
      new Enemy({
        x: 700,
        y: 550,
        w: 20,
        r: 50,
        color: "yellow",
        ctx: ctx,
      })
    );
  }
  floor = new Player({
    x: 0 + 10,
    y: 600,
    w: 800 - 20,
    r: 10,
    color: "white",
    ctx: ctx,
  });
  background = new Player({
    x: 0,
    y: 0,
    w: canvas.width,
    r: canvas.height,
    color: "black",
    ctx: ctx,
  });
  // player = new Player({
  //   x: 100,
  //   y: 550,
  //   w: 50,
  //   r: 50,
  //   color: "red",
  //   ctx: ctx,
  // });
  // console.log(player);
};

const update = () => {
  background.draw();
  for (let i = 0; i < 5; i++) {
    enemy.draw();
    enemy.update();
  }
  // player.draw();
  floor.draw();
  window.requestAnimationFrame(update);
};
draw();
update();
