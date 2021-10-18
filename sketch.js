var BATMAN , BATMANImg;
var JOKER , JOKERImg;
var gameOver , gameOverImg;

function preload()
{
  BATMANImg = loadImage("IMAGES/BATMAN.png");
  JOKERImg = loadImage("IMAGES/JOKER.png");
  gameOverImg = loadImage("IMAGES/GAME OVER.png") 
}

function setup() {
	createCanvas(500, 500);
  BATMAN = createSprite(350,370,10,10)
  BATMAN.addImage(BATMANImg);
  BATMAN.scale = 0.1;

  JOKER = createSprite(70,100,10,10)
  JOKER.addImage(JOKERImg);
  JOKER.scale = 0.1;
  JOKER.velocityX="3";
  JOKER.velocityY="4";
}


function draw() {
  rectMode(CENTER);
  background("blue");

  if (keyDown(RIGHT_ARROW)) {
    BATMAN.velocityX=2;
    BATMAN.velocityY=0;
 }
  if (keyDown(LEFT_ARROW)) {
    BATMAN.velocityX=-2;
    BATMAN.velocityY=0;
 }
    if (keyDown(UP_ARROW)) {
    BATMAN.velocityX=0;
    BATMAN.velocityY=-2; 
 }
    if (keyDown(DOWN_ARROW)) {
    BATMAN.velocityX=0;
    BATMAN.velocityY=2;
 }

   if(BATMAN.isTouching(JOKER)){
    gameOver = createSprite(200 , 200);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.2;
    gameOver.visibile = true;
    BATMAN.velocityX = 0;
    BATMAN.velocityY = 0;
  }

  drawSprites();
  
  
 
}
