let werte = [30, 390, 150, 200, 90];

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

  for(let i = 0; i < werte.length; i++){
    fill(i * 50, 0, 0);
    rect(10 + i*100, 0, 80, werte[i]);
  }

}
