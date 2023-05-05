let video;
let sound;
let img;

// Bilder, Schriften ... werden schon in der preload() geladen
function preload(){
  img = loadImage("assets/easyvape_stempel.jpg");
  sound = loadSound("assets/sound.mp3");
}

function setup() {

  createCanvas(400, 400);
  video = createVideo("assets/launch2.mp4");
  // video steuerelemente ein / ausblenden
  // video.showControls();
  // video.hideControls();

  // wenn das video zu ende ist, 
  video.onended(videoIstAus);

  // wenn das video statt als HTML Video Player 
  // auf das Canvas Element gezeichnet werden soll
  // VideoPlayer ausblenden
  video.hide();
}

function videoIstAus(){
  console.log("video ist fertig");
}

function draw() {
  background(220);

  image(img, 20, 20, img.width/2, img.height/2);//, 100, 100);

  image(video, mouseX, mouseY);
}

function mousePressed(){
  video.play();
}

function keyPressed(){
  if(sound.isPlaying()){
    sound.pause();
  } else {
    sound.play();
  }
}