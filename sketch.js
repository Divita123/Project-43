var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2= loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(50);
  fill("white");
  text("Score: " + score, 65, 125);  

  if(score === 3) {
    clear()
    background(bg2)
    strokeWeight(4);
    stroke("yellow")
    fill("white")
    textSize(40);
    text("TREASURE UNLOCKED",250, 100);
  }

  drawSprites()
}