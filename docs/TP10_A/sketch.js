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
  line(mouseX, mouseY, 120, 0);*/

  // WHILE Schleife
  // while (CONDITION) { CODEBLOCK }
  // solange die CONDITION erfüllt ist, 
  // führe den CODEBLOCK immer wieder aus, 
  // bis die CONDITION nicht mehr erfüllt ist.
  // Dann gehe weiter im Programm ...

  let xPos = 0;
  while(xPos <= width){
    stroke(0, xPos, 100);
    line(mouseX, mouseY, xPos, 0);
    // zaehle xPos jedes mal um 20 hoch, 
    // damit die Bedingung nach x wiederholungen
    // nicht mehr erfüllt ist und die while schleife
    // beendet wird.
    xPos = xPos + 20;
  }

  // COUTERDEFINITION
  let yPos = 0;

  //    CONDITION
  while(yPos <= height){
    stroke(yPos, 100, 100);
    line(mouseX, mouseY, 0, yPos);
    // INCREMENTOR
    yPos = yPos + 20;
  }


  // FOR-LOOP
  // for(COUNTERDEFINITION; CONDITION; INCREMETOR) { CODEBLOCK }
  for(let counter = 0; counter < 10; counter = counter + 1){
    ellipse(counter * 50, height/2, 40, 40);
  }




}
