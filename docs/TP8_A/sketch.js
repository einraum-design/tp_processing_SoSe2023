let angle = 0;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  rect(0, 0, 100, 80);

  // Verschieben vom Koordiantensystem
  translate(200, 150);

  rect(0, 0, 100, 80);

  // rotiere um den winkel mouseX
  // um den Nullpunkt des Koordinatensystems
  rotate(angle);
  angle = angle + 10;

  rect(0, 0, 100, 80);

  // alle Transformationen auf 
  // Standartkoordiantensystem zurücksetzen
  resetMatrix();

  line(0, 0, 50, 50);
}
