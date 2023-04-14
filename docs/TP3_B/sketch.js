// elementaren Variablentypen:

// Boolean bool: true / false
// Integer int Ganzzahlen: 0, 1, 2, 3, 573, -2345, ...
// FloatingPointNumbers float Fliesskommazahlen: 0.1, 123.235, -53.03
// Character char: 'a', 'b', 'c', ' ', 'ß', '.'


// Objekte (komplexe Variablen):

// String Zeichenkette: "Hello world", "Paul", "", ...
// PImage Processing Variable fuer Bilder
// PFont Processing Variable fuer Schriften



// VERGLEICHSOPERATOREN
// > größer
// >= größer oder gleich
// < kleiner
// <= kleiner oder gleich
//  a == b gleich  // Achtung a = b wäre eine Zuweisung!
// != nicht gleich


// VERKNÜPFUNGSOPERATOREN
// CONDITION1 && CONDITION2  -> UND -> Bedingung1 und 2 müssen erfüllt sein 
// CONDITION1 || CONDITION2  -> ODER -> Bedingung1 oder 2 muss erfüllt sein 
 


// Variablen Definition
// let VARIABLENNAME;
let xPos;
let xSpeed = 7.5;

// = ist eine Zuweisung. Werte rechts wird in die Variable links zugewiesen
let yPos = 150;
let ySpeed = 4.4;


// Variablendefinition in den meißten anderen Programmiersprachen
// TYP VARIABLENNAMEN
// float xPos;


function setup() {
  createCanvas(600, 400);
  xPos = width / 2;
  
  // die lokale Variable ist nur innerhalb der {} gültig in denen sie definiert ist
   let myLocalVariable = "hello";
  console.log(myLocalVariable);
  
}

function draw() {
  
  //background(220);
  
  
  fill(xPos, yPos, mouseX);
  
  ellipse(xPos, yPos, 50, 50);
  
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;
  
  // if-Bedingungen
  // if(CONDITION) { Inhalt vom Rumpf wird nur ausgeführt, wenn die Bedingung erfüllt ist }
  if(xPos >= width || xPos <= 0){
    xSpeed = -xSpeed;
  }
  
  if(yPos >= height || yPos <= 0){
    ySpeed = -ySpeed;
  }
 /* if(yPos >= height){
    ySpeed = -ySpeed;
  }
  
  if(yPos <= 0){
    ySpeed = -ySpeed;
  }*/
  
  
  if(mouseIsPressed){
    strokeWeight(5);
  } else {
    strokeWeight(1);
  }
  
}