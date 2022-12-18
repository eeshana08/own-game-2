var canvas
var bg, bgImage
var player, playerImg

function preload(){ 
bgImage = loadImage("forestImage.png");
playerImage = loadAnimation("cheeta1.png","cheeta2.png","cheeta3.png","cheeta4.png","cheeta5.png",
"cheeta6.png","cheeta7.png","cheeta8.png")
}

function setup(){
  createCanvas(800,250);
  bg = createSprite(370,150);
  bg.addImage(bgImage);
  bg.scale = 1.45
  bg.velocityX = -3
  player = createSprite(150,150);
  player.addAnimation("cheeta", playerImage);
  player.scale = 1

}


function draw(){
background("black");

if (bg.x < 2){
  bg.x = bg.width/2;
}



drawSprites();
}
