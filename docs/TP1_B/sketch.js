function setup() {
  
  createCanvas(600, 400);
  // mit Gradzahlen statt Bogenmass arbeiten
  angleMode(DEGREES);
  
  // background(RED[0 - 255], BLUE [0-255], GREEN[0-255]);
  background( 200 );
  
  
  noStroke();
  
  fill(0, 0, 255);
  // rectmode ist standartmaessig auf CORNER gestellt
  // rectMode(CENTER); // auf CENTER aendern
  // rect(xPos, yPos, width, height);
  rect(100, 150, 200, 150);
  
  
  // Kontur ändern:
  stroke(255, 0, 0);
  strokeWeight(5);
  
  fill(0, 0, 255, 100);
  // Ellipsen werden standartmaessig mit dem Ursprung / Referenzpunkt in der Mitte gezeichnet (CENTER)
  // ellipseMode CORNER stellt auf die gedankliche linke obere Ecke um
  ellipseMode(CORNER);
  ellipse(100, 150, 200, 150);
  
  noStroke();
  // Bogen: xPos, yPos, width, height, startangle, stopangle, MODE
  arc(60, 60, 100, 100, 45, 360-45, PIE);
  
}