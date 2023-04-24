let button;
// Farbvariable
let myColor;


function setup() {
  let cnv = createCanvas(400, 400);
  // setze das Element mit der id "myCanvas" als Eltern Element in der Struktur
  cnv.parent("myCanvas");

  button = createButton("Change color");
  button.position(300, 300);

  // Startfarbe initialisieren:
  myColor = color(255, 150, 0);

  // Anonyme Funktion
  button.mousePressed(() => {
    // wird bei jedem Klick auf den Button ausgeführt
    console.log("button pressed");
    myColor = color(random(255), random(255), random(255));
  });

  button.mouseReleased(changeColorAgain);
}

function draw() {
  //background(220);
  fill(myColor);
  ellipse(random(width), random(height), 30, 30);

  //button.position(300, 300 + 50.0*sin(frameCount/50.0));
}

// eigene Funktion definieren:
function changeColorAgain(){
  myColor = color(random(255), random(255), random(255));
}