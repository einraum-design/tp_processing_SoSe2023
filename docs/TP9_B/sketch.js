//let teilnehmer = [];
let teilnehmer = ["Anna", "Tom", "Lisa", "Felix"];

// leeres Array definieren
let katzen = [];

let katzen_index = 0;


// leeres Objekt Anlegen
let person = {}; 
person.name = "Paul";
person.nachname = "Müller";
person.alter = 26;
person.sex = "male";

// Objekt mit Eigenschaften anlegen
let ball = {
  xPos: 200, 
  yPos: 100,
  xSpeed: 2.3,
  ySpeed: 3.5,
  diameter: 30
};








function preload(){
  // neue Fächer ans Array anhängen
  katzen.push(loadImage("assets/cat1.jpg"));
  katzen.push(loadImage("assets/cat2.jpg"));
  katzen.push(loadImage("assets/cat3.jpg"));
  katzen.push(loadImage("assets/cat4.jpg"));
  katzen.push(loadImage("assets/cat5.jpg"));
}

function setup() {
  createCanvas(400, 400);
  teilnehmer[0] = "Andrea";
}

function draw() {


  background(220);

  image(katzen[katzen_index], 0, 0); //, katzen[0].width/5.0, katzen[0].height/5.0);

  //text(teilnehmer[0], 200, 220);

  // Zugriff über "."
  text(person.name + " " + person.nachname, 100, 200);
  text(person.alter, 100, 220);
  // Zugriff über []
  text(person["sex"], 100, 240);
}

function keyPressed(){
  // Processing Variable: key 
  // key enthält die zuletzt gedrückte Taste
  if(key == 'a'){
    katzen_index = katzen_index + 1;
    if(katzen_index >= katzen.length){
      katzen_index = 0;
    }


  }
}
