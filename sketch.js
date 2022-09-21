var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;
var gameover,gameoverImg;
var car1,car1Img,car1G;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameoverImg = loadImage("gameOver.png")
  car1Img = loadImage("CAR-1.png")
  

}

function setup(){
 createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("Running",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();
car1G=new Group();

gameover= createSprite(200,300,30,30);
gameover.addImage(gameoverImg);
gameover.scale=0.9;
gameover.visible=false;

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();
    createcarA();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();

      // treasureCollection=+ 150;
      // treasureCollection= 150;
      // treasureCollection= treasureCollection - 150;
       treasureCollection= treasureCollection + 150;
    } //else if(car1G.isTouching(boy))    {
     // car1G.destroyEach();
      //treasureCollection= treasureCollection - 100;
    //}
      
  else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
      
       gameover.visible=true;
        
        // cashG.destroyEach;
        // diamondsG.destroyEach;
        // jewelryG.destroyEach;
        // swordGroup.destroyEach;

        // cashG.destroy();
        // diamondsG.destroy();
        // jewelryG.destroy();
        // swordGroup.destroy();
        
         cashG.destroyEach();
         diamondsG.destroyEach();
         jewelryG.destroyEach();
         swordGroup.destroyEach();
         car1G.destroyEach();
        
        // cashGdestroyEach();
        // diamondsGdestroyEach();
        // jewelryGdestroyEach();
        // swordGroupdestroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jewelryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        car1G.setVelocityYEach(0);
    }
  
   if(car1G.isTouching(boy)){
    gameState=END;
    gameover.visible=true;
         cashG.destroyEach();
         diamondsG.destroyEach();
         jewelryG.destroyEach();
         swordGroup.destroyEach();
         car1G.destroyEach();
   }

  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCash() {
  if (World.frameCount % 180 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 190;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 280 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 190;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 380 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 190;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 450 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 190;
  swordGroup.add(sword);
  }
}

function createcarA(){
  if (World.frameCount % 530 == 0) {
  var car1 = createSprite(Math.round(random(50, 350),40, 10, 10));
  car1.addImage(car1Img);
  car1.scale=0.2;
  car1.velocityY = 3;
  car1.lifetime = 190;
  car1G.add(car1);
  }
}