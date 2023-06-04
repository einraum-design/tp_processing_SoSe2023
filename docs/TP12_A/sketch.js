function setup() {
  createCanvas(400, 400);
  //frameRate(1);
}

function draw() {
  background(220);


  randomPoint(mouseX, mouseY, 50);
  

}

function randomPoint(x, y, d){
  fill(0);
  noStroke();

  // for(VARIABLE; BEDINGUNG; INCREMENTOR){}
  for(let i = 0; i <= 1000; i = i+1){
    ellipse( x + random(-d, d), y + random(-d, d), 2);
  }
}

