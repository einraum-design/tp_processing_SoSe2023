function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  /*line(mouseX, mouseY, 0, 0);
  line(mouseX, mouseY, 20, 0);
  line(mouseX, mouseY, 40, 0);
  line(mouseX, mouseY, 60, 0);
  line(mouseX, mouseY, 80, 0);
  line(mouseX, mouseY, 100, 0);
  line(mouseX, mouseY, 120, 0);
  line(mouseX, mouseY, 140, 0);*/

  // WHILE Schleife
  // while(CONDITION) { CODEBLOCK }
  // solange die Bedingung erfüllt ist, 
  // soll der Codeblock immer wieder ausgeführt werden,
  // Ist die Bedingung nicht mehr erfüllt, 
  // geht es weiter im Code ...

  let xPos = 0;
  while(xPos <= width){
    stroke(xPos, 0, 0);
    line(mouseX, mouseY, xPos, 0);
    xPos = xPos + 20;
  }


  let yPos = 0;
  while(yPos <= height){
    stroke(0, yPos, 0);
    line(mouseX, mouseY, 0, yPos);
    yPos = yPos + 20;
  }

}
