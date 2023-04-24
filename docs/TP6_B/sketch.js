function setup() {
  createCanvas(400, 400);
  let btn = createButton("Button created with p5");
  btn.mousePressed(() => {console.log("button pressed")});
}

function draw() {
  background(220);
}
