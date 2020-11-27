//var
var monkey , monkey_running
var banana ,bananaImage, obstacle, ground, groundImage, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var collideTop,  collideBottom
var survivalTime= 0
var PLAY = 1
var END = 0

var gameState = PLAY

var damage = 0





var gameOver, gameOverImage

var restart, restartImage

function preload(){
  
  //animations
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //images
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png")
 groundImage = loadImage("41A1AE70-B27B-453C-8E8C-4FE23FD8DC49.png")
  
  restartImage = loadImage("reset.png")
  gameOverImage = loadImage("game over.png")
 
}



function setup() {
  createCanvas(600,420)
  
  //sprites
  
  monkey = createSprite(100,350,50,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.17
  
  ground = createSprite(300,210)
  ground.addImage("ground", groundImage)
  ground.velocityX = -7
  
  obstacle = createSprite(700,350)
  obstacle.addImage("obstacle",obstacleImage)
  obstacle.velocityX = -13
  obstacle.scale = 0.23
  
  banana = createSprite(random(680,720),120)
  banana.addImage("banana",bananaImage)
  banana.velocityX = -10
  banana.scale = 0.12
  
  gameOver = createSprite(300,190)
  gameOver.addImage("gameOver",gameOverImage)
  gameOver.visible = false

  restart = createSprite(300,240)
  restart.addImage("restart",restartImage)
  restart.scale = 0.45
  restart.visible = false
  
  //the top edge and the collider
  
  collideTop = createSprite(300,20,600,70)
  
  collideBottom = createSprite(300,420,600,70)
  
  monkey.setCollider("circle",0,0,240)
  
  obstacle.setCollider("circle",0,0,200)
  
 
}


function draw(){

  
  console.log(damage)
  
  
  if(monkey.isTouching(obstacle)){
    obstacle.destroy()
    damage++
    monkey.scale = random(0.10,0.15)
    
    
  }
  
  
  if(gameState === PLAY){
      
    survivalTime = survivalTime +1
    
    monkey.collide(collideTop)
    monkey.collide(collideBottom)
    banana.collide(collideBottom)

    collideBottom.visible = false
    collideTop.visible = false


    
    if(keyDown("space") && monkey.y>= 310) { 
      monkey.velocityY = -9
    }
      }


    if (monkey.y <=    95||monkey.y<=95||monkey.y<=127||monkey.y<=79){
       monkey.velocityY = 7
     }
    
 
    

      
    
    if(monkey.isTouching(banana)){
        monkey.scale = 0.26
        banana.destroy()
        score = score+1
      
        banana = createSprite(random(680,720),120)
        banana.addImage("banana",bananaImage)
        banana.velocityX = -10
        banana.scale = 0.12
      
       }
     

    if(ground.x < 70){
       ground.x = 450
     }
  
    if(obstacle.x < -3){
      obstacle.x = 1000
    }
    
     if(damage===2){
           survivalTime = survivalTime-1
           score.stop
           gameState = END
           ground.velocityX = 0
           obstacle.destroy()
           obstacle.velocityX = 0
           banana.velocityX = 0
       
            if(keyDown("space")){
            monkey.velocityY = 0

 }
       
     }
   
  if(damage => 1){
  
  if(frameCount % 78 === 0)
  obstacle = createSprite(700,350)
  obstacle.addImage("obstacle",obstacleImage)
  obstacle.velocityX = -13
  obstacle.scale = 0.23
  obstacle.setCollider("circle",0,0,200)
      
      
    }

  
   if(gameState===END){
  if(mousePressedOver(restart)||touches.length>0){
      reset();
        gameState = 1
      touches = []
    }
   }

    if(banana.x < -3){
      banana.x = 740
      banana.visible = true
    }
  
  
 
  
  
  if(gameState === END){
     
    gameOver.visible = true
    restart.visible = true 
     
 
    } 



   
 
  

  
  
  
  monkey.depth = ground.depth +1


  
  
  drawSprites();

  
    fill("white")
    textSize(30)
    text("Survival Time: "+survivalTime,330,120)
    text("banana's eaten: "+score,330,90)
  
} //SDSDSDFDFDF
    
  
  







function reset(){
  
  gameState = PLAY;
  
  obstacle.destroy()
  obstacle.velocityX= 0
  
  gameOver.visible = false
  restart.visible = false

  ground.velocityX = -5

  banana.velocityX = - 7

  score = 0;
  survivalTime = 0;
  
  damage = 0
  
  monkey.x =100
  monkey.y =350
         
  
  survivalTime = survivalTime+1
         
}