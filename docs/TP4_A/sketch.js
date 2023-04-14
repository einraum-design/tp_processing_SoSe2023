function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  
  if(mouseX <= width/2){
    background(0, 255, 0);
  } else if(mouseY <= height/2){
    background(0, 0, 255);
  } else {
    background(220);
  }


  let bx = 400;
  let by = 300;
  let bw = 80;
  let bh = 50;

  if(mouseX >= bx && mouseX <= bx + bw && mouseY >= by && mouseY <= by + bh){
    fill(200);
  } else {
    fill(255);
  }
  
  rect(bx, by, bw, bh);


}
