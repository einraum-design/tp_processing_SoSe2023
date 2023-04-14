/* elementare Variablen

Boolean bool: true / false
Integer int Ganzzahlen 0, 1, 2, 523, -23, ...
float Fließkommazahl 0.13, 234.0, -3.345345, ...
Character char 'a', 'b', ' ', '.', ...

Objekte (Komplexe Variablen)
String Zeichenkette "Hello world", "Paul", "235246"
PFont Variable um Schriftarten zu speichern
PImage Variable um Bilder/Texturen zu speichern
*/


// VERGLEICHSOPERATOREN für Bedingungen
  // > größer
  // < kleiner
  // >= größer oder gleich
  // <= kleiner oder gleich
  // a == b -> a ist gleich b
  // a != b -> a nicht gleich b
  
// VERKNÜPFUNGSOPERATOREN
// CONDITION1 && CONDITION2 --> UND: wenn beide Bedingungen erfüllt sind
// CONDITION1 || CONDITION2 --> ODER: wenn eine der Bedingungen erfüllt ist

// Variablendefinition
// let VARIABLENNAMEN;
let xPos;
let xSpeed = 3.3;
//  Variablendefinition mit Wertzuweisung
// = -> weist den Wert rechts der Variable links zu
let yPos = 200.0;
let ySpeed = 1.6;

let name = "Peter";

// bei anderen Programmiersprachen Typangabe
// int xPos;


function setup() {
  createCanvas(600, 400);
  xPos = width/2.0;
  
  let myLocalVariable = "hello";
  console.log(myLocalVariable);
}

function draw() {
  //background(220);
  fill(xPos, yPos, 200);
  ellipse(xPos, yPos, 50, 50);
  //text(xPos, xPos, yPos);
  
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  // if Bedinungen
  // if(CONDITION){ Rumpf wird nur ausgeführt, wenn die Bedingung erfüllt ist }
  /*if(xPos >= width){
    xSpeed = -1 * xSpeed;
  }
  
  if(xPos <= 0){
    xSpeed = -1 * xSpeed;
  }*/
  // beide Bedingungen mit ODER verbunden:
  if(xPos >= width || xPos <= 0){
    xSpeed = -1 * xSpeed;
  }
  
  
  /*if(yPos >= height){
    ySpeed = -ySpeed;
  }
  
  if(yPos <= 0){
    ySpeed = -ySpeed;
  }*/
  if(yPos >= height|| yPos <= 0){
    ySpeed = -ySpeed;
  }
  
  
  //if(mouseIsPressed == true){
  if(mouseIsPressed){
    strokeWeight(5);
  } else {
    strokeWeight(1);
  }
  
}