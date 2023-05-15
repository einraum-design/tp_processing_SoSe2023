// Array (Regal) von Variablen erstellen
let teilnehmer = []; // eckige Klammern

// Array mit Werten initialisieren
let farben = [
  "rot", 
  "blau", 
  "grün"
];

let myColors = [];

let images = []; 
let index_images = 0;


// allgemeines Objekt
// (Array ist ein spezielles Objekt bei dem 
// die Felder mit 0 - x nummeriert sind)

let person = {}; // geschweifte Klammern
// beliebig Felder 
// Zugriff über "." Operator
person.name = "Tom";
person.nachname = "Schmitt";
person.alter = 25;
person.sex = "male";
person.hobbies = ["Sport", "malen", "Kino"];

// Ball Objekt mit Eigenschaften initiieren
let ball = {
  xPos: 200,
  yPos: 300,
  xSpeed: 2.5,
  ySpeed: 4.0
}


// Zugriff über []
// person["name"] = "Thomas";

function preload(){
  // Werte (Bilder) an das Array anhängen
  images.push(loadImage("assets/cat1.jpg"));
  images.push(loadImage("assets/cat2.jpg"));
  images.push(loadImage("assets/cat3.jpg"));
  images.push(loadImage("assets/cat4.jpg"));
}

function setup() {
  createCanvas(400, 400);
  // wert an stelle 0 überschreiben
  farben[0] = "violet";

  myColors.push(color(255, 0, 0));
  myColors.push(color(0, 255, 0));
  myColors.push(color(0, 255, 255));

}

function draw() {
  background(220);

  
  image(images[index_images], 0, 0);


  fill(myColors[0]);
  text(farben[0], 200, 200);


  text(person.name + " " + person.nachname, 50, 200);
  text(person.alter, 50, 220);
  text(person.sex, 50, 240);


}

function keyPressed(){
  // Processing Variable key
  // key enthält die zuletzt gedrückte Taste
  if(key == 'a'){
    //index_images = index_images + 1;
    // kurzschreibweise:
    index_images ++;

    if(index_images >= images.length){
      index_images = 0;
    }

  }

}