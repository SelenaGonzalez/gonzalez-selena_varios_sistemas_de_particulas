let s;
let v;
let p;

function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Sistema();
  v = new Sistema();
  p = new Sistema();
}

function draw() {
  background(0, 50);
  s.update();
  s.display();
  p.update();
  p.display();
  v.update();
  v.display();
}
