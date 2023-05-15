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
  let secondRotation = map(second() , 0, 60, 0, 360);
  rotate(secondRotation);


  stroke(255, 0, 0);
  line(0, 0, 0, -180);


  // Rotation für Sekundenzeiger zurücksetzen
  // WEG 0 
  // resetMatrix();
  // wieder auf die Mitte Translaten und dann Minutenrotation starten ...


  // WEG 1 - zurück rotieren
  rotate(-secondRotation);

  // WEG 2 - push() - pop()
  // push() speichert den aktuellen Zustand 
  // des Zeichenkoordinatensystems
  // pop() setzt die Transformationen wieder 
  // auf den beim letzten push() gespeicherten 
  // zurück.
  push();

  // Minutenzeiger 
  // minute() -> int:  0 - 59
  let minuteRotation = map(minute()+ second()/60.0, 0, 60, 0, 360);
  rotate(minuteRotation);
  stroke(0);
  strokeWeight(3);
  line(0, 0, 0, -180);
  // setzt die Rotation vom Minutenzeiger zurück
  pop();


  push();
  // Stundenzeiger
  // hour() -> int: 0 - 23
  let hourRotation = map(hour() + minute()/60.0, 0, 24, 0, 720);
  rotate(hourRotation);
  stroke(0);
  strokeWeight(6);
  line(0, 0, 0, -160);
  pop();
}
