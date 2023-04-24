let bx = 200;
let by = 150;
let bd = 100; // Durchmesser vom Kreis

let bstatus = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  

  

  // wenn Maus auf der Kreisfläche ist
  if(dist(bx, by, mouseX, mouseY) <= bd/2){
    fill(255, 255, 0);
    // wenn Maustaste gedrückt ist:
    if(mouseIsPressed){
      fill(255, 0, 0);
      
      /* -> wird im mousePressed Event Handler ausgeführt
      // bstatus umschalten: false -> true oder true -> false
      if(bstatus == false){
        bstatus = true;
      } else {
        bstatus = false;
      }
      */
      
      console.log("button status: " + bstatus )

    
    } else{
      //hover
      fill(255, 255, 0);
    }

  } else {
    // maus nicht auf dem Kreis:
    fill(255);
  }


  if(bstatus){
    fill(0, 255, 0);
  }
  ellipse(bx, by, bd);
}

function mousePressed(){
  console.log("pressed");

  // wenn Maus auf der Kreisfläche ist
  if(dist(bx, by, mouseX, mouseY) <= bd/2){
    // bstatus umschalten: false -> true oder true -> false
    if(bstatus == false){
      bstatus = true;
    } else {
      bstatus = false;
    }
  }


}