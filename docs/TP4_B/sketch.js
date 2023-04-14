function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  if(mouseX <= width/2){
    background(0, 255, 0);
  } else if(mouseY <= height/2){
    background(255, 0 , 0);
  } else {
    background(220);
  }


  let bx = 270;
  let by = 250;
  let bw = 100;
  let bh = 80;

  if(mouseX >= bx && mouseX <= bx + bw && mouseY >= by && mouseY <= by + bh){
    fill(220, 100, 0);
  } else {
    fill(255);
  }


  rect(bx, by, bw, bh);
  
}
