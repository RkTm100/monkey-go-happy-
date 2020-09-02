var PLAY = 1
var END = 0
var gameState = PLAY;

var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(40, 265, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.10;

  ground = createSprite(300, 300, 800, 10)
 




  score = 0;

foodGroup=createGroup();
obstacleGroup=createGroup();



}


function draw() {
  background("white");
  
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
    text("Survival Time: " + score, 150, 50);

  score = Math.round(score + (Math.round(getFrameRate() / 60) / 2))

  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8

  ground.velocityX = -4 


  monkey.collide(ground);

if(monkey.isTouching(foodGroup)){
foodGroup.destroyEach();
}

     

  
  food();
stone();

  drawSprites();

}


function food() {
if (frameCount%80===0){
var banana=createSprite(400,100,10,40);
  banana.addImage("banana",bananaImage);
  banana.scale=0.05;
  banana.y=Math.round(random(120,200));
  banana.velocityX=-4;
  banana.lifetime=200;
  
  foodGroup.add(banana);





}
}


function stone(){
if(frameCount % 100===0 && frameCount >=300){
  var obstacle=createSprite(200,270,10,40);
  obstacle.addImage("stone",obstacleImage);
  obstacle.scale=0.15;
  obstacle.velocityX=-6
  
  obstacle.lifetime=300;
  
  obstacleGroup.add(obstacle);
  


}




}

function reset(){
gameState=PLAY
}













