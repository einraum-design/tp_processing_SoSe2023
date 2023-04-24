let bx = 200;
let by = 180;
let bw = 100;
let bh = 70;

// Zustand vom Button
let bstatus = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if(mouseX >= bx && mouseX <= bx+bw && mouseY >= by && mouseY <= by + bh){
    // wenn Maustaste zusätzlich gedrückt ist:
    if(mouseIsPressed){
      fill(255, 255, 0);
      // console.log("pressed in draw");
    } else {
      // ansonsten nur hover Farbe
      fill(0, 255, 0);
    }
  }else {
    fill(255);
  }

  if(bstatus == true){
    fill(255, 0, 0);
  }
  rect(bx, by, bw, bh);

}

// Mouse Event Listener -> wird pro MousePress einmal ausgeführt
function mousePressed(){
  //console.log("pressed");

  // abfragen ob ich auf dem Button bin
  if(mouseX >= bx && mouseX <= bx+bw && mouseY >= by && mouseY <= by + bh){
    // toggle den bstatus 
    // wenn bstatus true -> setze auf false
    // wenn bstatus false -> setze auf true
    if(bstatus){
      bstatus = false;
    } else {
      bstatus = true;
    }
  }
}