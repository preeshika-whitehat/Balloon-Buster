

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage, tfp, tfpImage;
var gameState="play";

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  tfpImage=loadImage("Thanks for playing.png");
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3.3;
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1.3;
  
  score = 0;
  arrows = 50;
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
}

function draw() {
if(gameState==="play"){
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  createEdgeSprites();
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+4;
    arrows=arrows-1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
   arrows=arrows-1;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
   arrows=arrows-1;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
  arrows=arrows-1;
}
  
if(arrows===0){
  gameState="over";
}  

  drawSprites();
    text("Score: "+ score, 500,50);
    text("Number of balloons left : " + arrows, 50, 50);
    text("Click on space to start shooting!!", 250, 50);
}


function redBalloon() {
  var red = createSprite(Math.round(random(20, 370)),600, 10, 10);
  red.addImage(red_balloonImage);
  red.velocityY = -5;
  red.lifetime = 200;
  red.scale = 0.13;
  red.debug=false;
  red.setCollider("rectangle",0,0,5, 1)
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(Math.round(random(20, 370)),600, 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityY = -4;
  blue.lifetime = 200;
  blue.scale = 0.13;
  blue.debug=false;
  blue.setCollider("rectangle",0,0,5, 1)
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(Math.round(random(20, 370)),600, 10, 10);
  green.addImage(green_balloonImage);
  green.velocityY = -3;
  green.lifetime = 200;
  green.scale = 0.13;
  green.debug=false;
  green.setCollider("rectangle",0,0,5, 1)
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(Math.round(random(20, 370)),600, 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityY = -2;
  pink.lifetime = 200;
  pink.scale = 1.5;
  pink.debug=false;
  pink.setCollider("rectangle",0,0,5, 1)
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 150;
  arrow.scale = 0.35;
  arrowGroup.add(arrow);
   
}
}