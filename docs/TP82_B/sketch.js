function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  translate(width/2, height/2);


  // second() -> int:  0 - 59

  // map = Dreisatzfunktion
  // OUTPUT = map(INPUT, INPUT_START, INPUT_END, OUTPUT_START, OUTPUT_END);
  let secondRotation = map(second(), 0, 60, 0, 360);
  rotate(secondRotation);
  stroke(255, 0, 0);
  line(0, 0, 0, -180);

}
