function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  rect(0, 0, 150, 100);

  // Koordinatensystem verschieben
  translate(200, 150);
  rect(0, 0, 150, 100);

  // Koordinatensystem um den Nullpunkt drehen
  rotate(mouseX);
  rect(0, 0, 150, 100);

  // Koordinatensystem auf Standart zurücksezten
  resetMatrix();

  // Koordinatensystem skalieren auf 3fache Größe
  //scale(3, 3);

  line(0, 0, 100, 100);
}
