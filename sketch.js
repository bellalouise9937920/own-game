var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost= createSprite (200,200,50,50);
  ghost.addImage ("ghost",ghostImg);
  ghost.scale= 0.3;

  doorsGroup= new Group ();
  climbersGroup= new Group ();
}

function draw() {
  background(200);
  if (gameState == 'play') {
  if (keyDown("space")) {
    ghost.velocityY= -5;
  }

  ghost.velocityY= ghost.velocityY+0.5;
  
  if (keyDown(RIGHT_ARROW)) {
     ghost.x= ghost.x+3;
  }

  if (keyDown(LEFT_ARROW)) {
    ghost.x= ghost.x-3;
  }

  if(tower.y > 400){
      tower.y = 300
    }

    gerarPortas ();
  if (climbersGroup.isTouching(ghost)|| ghost.y > 600) {
    ghost.destroy();
    gameState= 'gameOver';
  }
}

if (gameState == 'gameOver') {
fill ("red");
textSize (30);
text ('Fim de Jogo',230,250);
}
drawSprites ();
}

function gerarPortas () {
 if  (frameCount%200 == 0) { 
 door= createSprite (200,-50);
   door.addImage ('door',doorImg);
   door.velocityY= 4;
   door.x= Math.round(random(100,300));
   door.lifetime= 150;
   doorsGroup.add (door);

   climber= createSprite (200,10);
   climber.x= door.x;
   climber.addImage ('climber',climberImg);  
   climber.velocityY= 4;
   climber.lifetime= 150;
   climbersGroup.add (climber);
  } 
  }