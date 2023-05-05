let col;


function setup() {
  let cvs = createCanvas(400, 400);
  // Canvas als Kind von canvasDiv setzen 
  // (in der HTML Struktur verschieben)
  cvs.parent("canvasDiv");

  col = '#ffff00';
  

  let btn = createButton("Button created with p5");
  btn.position(200, 200);
  // anonyme Funktion: () => {}
  btn.mousePressed(() => {
    console.log("button pressed");
    col = color(random(255),random(255),random(255));
  });

  // Funktionsaufruf
  btn.mouseReleased(wechselNochmalFarbe);

}

function draw() {
  background(220);
  fill(col);
  ellipse(width/2, height/2, 100, 100);
}


// definition neuer Funktion
function wechselNochmalFarbe(){
  col = color(random(255),random(255),random(255));
  console.log(col);
}


