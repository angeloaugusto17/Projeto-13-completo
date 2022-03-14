//Projeto 13; 10:51; Ângelo Augusto; 02/03/2022.
//Primeira parte do projeto dos balões, não foi complicado fazer
//mas demorei um pouco por causa de erros no código fonte.

//Background
var background, backgroundImg;

//Bow
var bow, bowImg;

//Arrow
var arrow, arrowG,arrowImg;

//Red Balloon
var red, redG, redBalloonImg;

//Green Ballon
var green, greenG, greenBalloonImg;

//Blue Ballon
var blue, blueG, blueBalloonImg;

//Pink Ballon
var pink, pinkG, pinkBalloonImg;   
      
//Score
var score = 0 ;

function preload(){
  //Background Image
  backgroundImg = loadImage("background0.png");

  //Arrow Image
  arrowImg = loadImage("arrow0.png");

  //Bow Image
  bowImg = loadImage("bow0.png");

  //Green Balloon Image
  greenBalloonImg = loadImage("green_balloon0.png");

  //Pink Balloon Image
  pinkBalloonImg = loadImage("pink_balloon0.png");

  //Blue Balloon Image
  blueBalloonImg = loadImage("blue_balloon0.png");

  //Red Balloon Image
  redBalloonImg = loadImage("red_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  //Create Background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImg);
  scene.scale = 2.5;
  
  //Create Bow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImg); 
  bow.scale = 1;
}

function draw() {
  background(0);

  //Text
  text("Pontuação: "+ score, 300,50)

  //Moving background
  scene.velocityX = -3 

  if(scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //Moving Bow
  bow.y = World.mouseY
  
  //Shoot arrow when spacebar is pressed
  if (mousePressedOver(scene)) {
    createArrow();
  }
  
  //Create Enemies
  var selectBalloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (selectBalloon == 1) {
      redBalloon();
    } else if (selectBalloon == 2) {
      greenBalloon();
    } else if (selectBalloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  //Destroy Balloons
  //RedBalloon
  if (arrowG.isTouching(redG)) {
    redG.destroyEach();
    arrowG.destroyEach();
    score = score + 1;
  }

  //GreenBalloon
  if (arrowG.isTouching(greenG)) {
    greenG.destroyEach();
    arrowG.destroyEach();
    score = score + 3;
  }

  //BlueBalloon
  if (arrowG.isTouching(blueG)) {
    blueG.destroyEach();
    arrowG.destroyEach();
    score = score + 2;
  } 

  //PinkBalloon
  if (arrowG.isTouching(pinkG)) {
    pinkG.destroyEach();
    arrowG.destroyEach();
    score = score + 1;
  }

  drawSprites();
}


// Criando flechas para arco
 function createArrow() {
  arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImg);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowG.add(arrow);
}

 function redBalloon() {
   red = createSprite(0,Math.round(random(20, 370)), 10, 10);
   red.addImage(redBalloonImg);
   red.velocityX = 3;
   red.lifetime = 150;
   red.scale = 0.1;
   redG.add(red);
 }

function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blueBalloonImg);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueG.add(blue);
}

function greenBalloon() {
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(greenBalloonImg);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenG.add(green);
}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pinkBalloonImg);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkG.add(pink);
}
