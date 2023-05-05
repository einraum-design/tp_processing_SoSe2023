function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // Koordinaten System auf 
  // Mittelpunkt der Uhr verschieben
  translate(width/2, height/2);
  stroke(0);
  ellipse(0, 0, 400);

  strokeWeight(4);
  stroke(255, 0 , 0);
  // second() -> int - aktuelle Sekundenzahl 0 - 59
  // OUT = map(INPUT, INPUT_START, INPUT_END, OUTPUT_START, OUTPUT_END);
  let secondAngle = map(second(), 0, 60, 0, 360);
  rotate(secondAngle);
  line(0, 0, 0, -180);


  // Bevor ich für den Minutenzeiger rotiere muss ich die Rotation vom 
  // Sekundenzeiger wieder zurücksetzen

  // WEG 1: zurückrotieren
  rotate(-secondAngle);


  // WEG 2: push() Funktion
  // mit push() den aktuellen Stand der Transformation zwischenspeichern 
  // und mit pop() wieder auf diesen Zustand zurücksetzen

  // Zustand bevor für den Minutenzeiger gedreht wird zwischenspeichern
  push();
  // minute() -> int - akutelle Minutenzahl 0 - 59
  let minuteAngle = map(minute(), 0, 60, 0, 360);
  rotate(minuteAngle);
  strokeWeight(6);
  stroke(0);
  line(0, 0, 0, -190);

  // Koordinantesystem wieder auf Zustand vom letzen push() zurücksetzen
  pop();

  // hour() -> int - aktuelle Stundenzahl 0 - 23



  // millis() -> int - millisekunden 0 - 1000 je Sekunden





}
