
// current position
let cx = 100;
let cy = 100;
// target position
let tx = 400;
let ty = 300;


let ball = {
  // cx: 100,
  // cy: 100,
  // tx: 400,
  // ty: 300,
  currentPos: {
    x: 100,
    y: 100
  },
  targetPos: {
    x: 400, 
    y: 300
  }
}

// zugriff auf ball currentPos x: ball.currentPos.x




function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {

  background(220);

  pacman(300, 350);

  pacman(120, 200, 150);

  pacman(300, 100, 80, color(255, 0, 0));

  // die Random Funktion ist eine Funktion mit Rückgabe
  let variable = random(100);

  let summe = addiere(5, 8);
  console.log(addiere(5,13));


  let bx = 300;
  let by = 200;
  let bw = 40;
  let bh = 80;

  if(mouseOverRect(bx, by, bw, bh)){
    fill(255,0, 0);
  } else {
    fill(255);
  }
  rect(bx, by, bw, bh);


  //cx = cx + (tx - cx)*0.1;
  //cy = cy + (ty - cy)*0.1;
  cx = interpoliere(cx, tx, 0.1);
  cy = interpoliere(cy, ty, 0.03);

  fill(0, 0, 255);
  ellipse(cx, cy, 50, 50);

   // save("meinsvg.svg");
  //noLoop();




  randomEllipse(mouseX, mouseY, 50);


}

function randomEllipse(_x, _y, _d){

  // for( VARIABLENDEFINITION; BEDINGUNG; INKREMENTOR){  CODE }

  for(let i = 0; i<1000; i++){
    ellipse(_x + random(-_d, _d), _y + random(-_d, _d), 1);
  }
  
}



// Definition einer eigenen Funktion
// function FUNKTIONSNAME ( PARAMETER ) { CODE }
function pacman(xPos, yPos, s = 100, col = color(255, 255, 0)) {
  let x = xPos;
  let y = yPos;
  //let s = 100;
  let mouth = 45;

  
  push();
  translate(x, y);

  fill(col);
  arc(0, 0, s, s, mouth, 360-mouth, PIE);

  fill(0);
  ellipse(0, -s/4.0, s/10.0, s/10.0);
  pop();
}


function addiere(wert1, wert2){
  let result = wert1 + wert2;

  // Ergebnis zurückliefern
  return result;
}



function mouseOverRect(x, y, w, h){
  if(mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h){
    return true;
  } else {
    return false;
  }
}

function interpoliere(currentVal, targetValue, speed){
  let diff = targetValue - currentVal;
  let result = currentVal + diff * speed;
  return result;
}

// In den meisten anderen Programmiersprachen

// RÜCKGABETYP FUNKTIONSNAME ( PARAMTER ) { ... CODE ... }
// void -> keine Ergebnis Rückgabe (Funktion wird einfach nur ausgeführt)
// int / float / PImage ... -> gibt an welcher Wert als Ergebnis zurückgeliefert wird

// int addiere (int wert1, int wert2) { ... Code ... }



function mousePressed(){
  tx = mouseX;
  ty = mouseY;
}