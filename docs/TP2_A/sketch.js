// Processing Variablen
// mouseX -> Beinhaltet die akutelle Maus-X-Position innerhalb vom Canvas - Ganzzahl (Integer)
// mouseY -> Beinhaltet die akutelle Maus-Y-Position innerhalb vom Canvas - Ganzzahl (Integer)
// width  -> Beinhaltet die Breite vom Canvas Element - Ganzzahl (Integer)
// height -> Beinhaltet die Hoehe vom Canvas Element - Ganzzahl (Integer)
// frameCount -> zählt die Wiederholungen der function draw() - Ganzzahl (Integer)


// der Inhalt der function setup wird einmal zum Programmstart ausgeführt.
// Hier werden die "Grundeinstellungen" festgelegt
function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(600, 400);
  angleMode(DEGREES);
  
  
}

function draw() {
  background(220,1);
  fill(255, mouseX, mouseY, 100);
  ellipse(mouseY, mouseX, mouseY, 100);
  
  // Grundrechenarten können direkt als Parameter geschrieben werden
  // + - * : &(Modulo)
  ellipse( width/2, height/2, 50, 50);
  
  
  fill(255);
  // rechteck am unteren Rand vom sketch positioniert:
  rect(0, height - 30, width, 30);
  
  rect(width*2/3, 0, width/3, height-30);
  
  
  
  fill(random(255), 100, 100);
  triangle(0, 0, 0, 100, 50, frameCount*0.5);
  
  // Zufallsfunktion
  // random(MAX) -> zufällige Zahl 0 - MAX
  // random(MIN, MAX) -> zufällige Zahl MIN - MAX
  
  ellipse(random(width), random(height), 10, 10);
}