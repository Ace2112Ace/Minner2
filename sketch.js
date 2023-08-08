var bomb,bombimg
var bones,bonesimg
var gold,goldimg
var ground,groundimg
var hook,hookimg
var rock,rockimg
var truck,truckimg
function preload(){
 bombimg=loadImage("bomb.png")
 goldimg=loadImage("gold.png")
 bonesimg=loadImage("bones.png")
 groundimg=loadImage("ground.jpg")
 hookimg=loadImage("hook.png")
 rockimg=loadImage("rock.png")
 truckimg=loadImage("truck.png")
}

function setup(){
  createCanvas(1200,700)
  truck=createSprite(600,200)
  truck.addImage(truckimg)
  truck.scale=.3

  hook=createSprite(600,0)
  hook.addImage(hookimg)
  

 
}

function draw(){
  background(groundimg);

Bones()
 Gold()
 Rock() 
 Bomb()

 if(keyDown("down")){
  hook.velocityY+=2
 }
if(hook.y>450){
  hook.velocityY=0
}
drawSprites()
}

function Bomb()
{
  if(frameCount%50==0){
    bomb=createSprite(random(100,1100),random(350,680),10,10)
    bomb.addImage(bombimg)
    bomb.scale=0.2
  }
}

function Rock()
{
  if(frameCount%50==0){
    rock=createSprite(random(100,1100),random(350,680),10,10);
    rock.addImage(rockimg)
    rock.scale=0.3
  }
}

function Bones()
{
  if(frameCount%50==0){
    bones=createSprite(random(100,1100),random(350,680),10,10);
    bones.addImage(bonesimg)
    bones.scale=0.3
  }
}

function Gold()
{
  if(frameCount%50==0){
    gold=createSprite(random(100,1100),random(350,680),10,10);
    gold.addImage(goldimg)
    gold.scale=0.2
    
  }
}
