let video;
let mysound; 
let img;

// in der function preload werden Bilder, Schriften ...
function preload() {
  img = loadImage("assets/bild.jpg");
  mysound = loadSound("assets/sound.mp3");
}

function setup() {
  createCanvas(400, 400);

  // erstellt einen HTML Videoplayer
  video = createVideo("assets/launch2.mp4");

  // setze feste Positon vom Videoplayer
  //video.position(200, 200);

  video.onended(() => { console.log("Video ist zuende" )});

  // Zeige Steuerelemente vom Videoplayer
  //video.showControls();
  //video.hideControls();


  // wenn Video auf canvas und nicht als HTML Player gezeichnet 
  // werden soll:
  // video ausblenden
  video.hide();
}

function draw() {
  background(220);
  image(img, 50, 50, img.width/10.0, img.height/10.0);

  image(video, mouseX, mouseY, video.width, 100);
}

function mousePressed(){
  video.play();
}

function keyPressed(){
  // toggle per keyPress zwischen play und pause
  if(mysound.isPlaying() == false){
    mysound.play();
  } else {
    mysound.pause();
  }
}
