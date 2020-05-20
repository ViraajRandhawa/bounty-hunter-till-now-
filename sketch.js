var start,startImg;
var desertImg;
var title,titleImg;
var title1,title1Img;
var gameState = "start";
var player,playerImg;
var enemy,enemyImg;
var bulletImg;
var bullet1Img;
var level1,level1Img;
var level2,level2Img;
var grayScreenImg;
var life,lifeImg;
var ice,iceImg;
var speeder,speederImg;
var speeder1,speeder1Img;
var enemy1;
var end,endImg;
var restart,restartImg;
var beskar,beskarImg;
var score = 0;
var win,winImg;
var next,nextImg;


function preload() {
  startImg = loadImage("play.png");
  desertImg = loadImage("desert.png");
  titleImg = loadImage("TITLE.png");
  title1Img = loadImage("starwars.png");
  playerimg = loadImage("mando helmet.png");
  enemyImg = loadImage("stormtrooper.png");
  bulletImg = loadImage("laser bullet.png");
  bullet1Img = loadImage("laser.png");
  level1Img = loadImage("level 1.png");
  level2Img = loadImage("level 2.png");
  grayScreenImg = loadImage("screen.png");
  lifeImg = loadImage("life.png");
  iceImg = loadImage("ice.jpeg");
  speederImg = loadImage("speeder.png");
  speeder1Img = loadImage("enemySpeeder.png");
  endImg = loadImage("gameover.png");
  restartImg = loadImage("restart.png");
  beskarImg = loadImage("beskar.png");
  winImg = loadImage("win.png");
  nextImg = loadImage("nextlevel.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight - 79);

  enemyGroup = createGroup();
  bulletGroup = createGroup();
  bullet1Group = createGroup();
  restartGroup = createGroup();
  
  title = createSprite(displayWidth - 700, displayHeight - 600);
  title.addImage("title",titleImg);
  title.scale = 1.8;
  
  win = createSprite(displayWidth/2,displayHeight/4);
  win.addImage("you win",winImg);
  win.visible = false;
  
  title1 = createSprite(displayWidth - 700, displayHeight - 800);
  title1.addImage("title",title1Img);
  title1.scale = 0.15;

  end = createSprite(displayWidth/2,displayHeight/4);
  end.addImage("over",endImg);
  end.scale = 0.5;
  end.visible = false;

  restart = createSprite(displayWidth/2,displayHeight/2);
  restart.addImage("restart",restartImg);
  restart.visible = false;

  start = createSprite(displayWidth - 700, displayHeight - 400);
  start.addImage("start",startImg);
  start.scale = 1;
  
  life = createSprite(displayWidth - displayWidth + 50,displayHeight - displayHeight + 50);
  life.addImage("life",lifeImg);
  life.visible = false;
  life.scale = 0.03;

  life1 = createSprite(displayWidth - displayWidth + 150,displayHeight - displayHeight + 50);
  life1.addImage("life",lifeImg);
  life1.visible = false;
  life1.scale = 0.03;

  life2 = createSprite(displayWidth - displayWidth + 250,displayHeight - displayHeight + 50);
  life2.addImage("life",lifeImg);
  life2.visible = false;
  life2.scale = 0.03;

  life3 = createSprite(displayWidth - displayWidth + 350,displayHeight - displayHeight + 50);
  life3.addImage("life",lifeImg);
  life3.visible = false;
  life3.scale = 0.03;

  life4 = createSprite(displayWidth - displayWidth + 450,displayHeight - displayHeight + 50);
  life4.addImage("life",lifeImg);
  life4.visible = false;
  life4.scale = 0.03;

  ice = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  ice.addImage("ice",iceImg);
  ice.visible = false;
  ice.scale = 5.5;

  speeder = createSprite(displayWidth,displayHeight);
  speeder.addImage("speeder",speederImg);
  speeder.scale = 1.5;
  speeder.visible = false;

  speeder1 = createSprite(displayWidth,displayHeight);
  speeder1.addImage("speeder",speeder1Img);
  speeder1.scale = 1.5;
  speeder1.visible = false;

  player = createSprite(displayWidth - 100, displayHeight - 500);
  player.addImage("mando",playerimg);
  player.visible = false;
  player.scale = 0.1;

  enemy = createSprite(displayWidth - displayWidth,displayHeight/2 );
  enemy.addImage("trooper",enemyImg);
  enemy.scale = 0.2;
  enemy.visible = false;

  beskar = createSprite(enemy.x,enemy.y);
  beskar.addImage("beskar",beskarImg);
  beskar.visible = false;
  
  next = createSprite(displayWidth/1.5,displayHeight/1.5);
  next.addImage("next",nextImg);
  next.visible = false;
  

  //------------------------------------------------------------------------------//
  grayscreen = createSprite(displayWidth - 720,displayHeight - 500,50,50);
  grayscreen.addImage("black",grayScreenImg);
  grayscreen.visible = false;

  grayscreen1 = createSprite(displayWidth - 720,displayHeight - 500,50,50);
  grayscreen1.addImage("black",grayScreenImg);
  grayscreen1.visible = false;

  grayscreen2 = createSprite(displayWidth - 720,displayHeight - 500,50,50);
  grayscreen2.addImage("black",grayScreenImg);
  grayscreen2.visible = false;

  grayscreen3 = createSprite(displayWidth - 720,displayHeight - 500,50,50);
  grayscreen3.addImage("black",grayScreenImg);
  grayscreen3.visible = false;
  //------------------------------------------------------------------------------||


  level1 = createSprite(displayWidth - 720,displayHeight - 700);
  level1.addImage("level1",level1Img);
  level1.scale = 0.1;
  level1.visible = false;


  level2 = createSprite(displayWidth - 720,displayHeight - 700);
  level2.addImage("level2",level2Img);
  level2.scale = 0.1;
  level2.visible = false;

}

function draw() {

  player.y = mouseY;
  
  if (gameState === "start") {
    background(0);
  }
  
  if (mousePressedOver(start)) {
    title.visible = false;
    title1.visible = false;
    start.destroy();
  
    gameState = "level1start";
  }

//------------------------------LEVEL1---------------------------------//
  if (gameState === "level1start") {
    background(desertImg);

    player.x = displayWidth - 100;
    player.y = displayHeight - 500;
    player.visible = true;
    level1.visible = true;
    win.visible = false;
    beskar.visible = false;
    next.visible = false;
   
    if (mousePressedOver(level1)) {
      gameState = "level1";
    }


  }


  if (gameState === "level1") {
    background(desertImg);

    enemy.visible = true;
    enemy.y = player.y;

    player.y = mouseY;

    win.visible = false;
    beskar.visible = false;
    next.visible = false;
    level1.visible = false;

    if (keyWentDown("space")) {
      var bullet= createSprite(100, 100, 5, 10);
      bullet.y = player.y;
      bullet.x = player.x;
      bullet.addImage("laser",bulletImg);
      bullet.scale = 0.5;
      bullet.velocityX = -50;
      bullet.lifetime = 1000;
      bulletGroup.add(bullet);
    }
    
    
    if (frameCount % 50 === 0) {
      var bullet1 = createSprite(100, 100, 5, 10);
      bullet1.y = enemy.y;
      bullet1.x = enemy.x;
      bullet1.addImage("laser",bullet1Img);
      bullet1.scale = 0.5;
      bullet1.velocityX = 30;
      bullet1.lifetime = 1000;
      bullet1Group.add(bullet1);
    }

    if (bulletGroup.isTouching(enemy)) {
      score = score + 1;
    }
    if (bullet1Group.isTouching(player)) {
      score = score - 1;
    }
    if (score > 100) {
      enemy.destroy();
      gameState = "victory";
    }
    textSize(25);
    textFont("impact");
    text(score,player.x - 10,mouseY - 70);
  }
  if (gameState === "victory") {
    background("teal");
    beskar.x = displayWidth/2
    beskar.y = displayHeight/2
    beskar.visible = true;
    player.visible = false;
    win.visible = true;  
    next.visible = true;
    
  }
  if (mousePressedOver(next)) {
      gameState = "level2Start";
  }

 //---------------------------LEVEL1---------------------------------------||
 //-----------------------LEVEL2------------------------------------------//
  if (gameState === "level2start") {
    background("aliceblue");

    end.visible = false;
    restart.visible = false
    player.x = displayWidth/2
    player.y = displayHeight/2;
    player.visible = true;
    level2.visible = true;
    win.visible = false;
    beskar.visible = false;
    next.visible = false;
    ice.velocityY = 0;

    ice.visible = true;
    speeder.visible = true;
    speeder.x = player.x;
    speeder.y = player.y;

    if (mousePressedOver(level2)) {
      gameState = "level2";
    }
  }

  if (gameState === "level2") {
    background("aliceblue");

    ice.visible = true;
    speeder.visible = true;
    player.visible = true;
    level2.visible = false;
    ice.velocityY = 40;
    win.visible = false;
    beskar.visible = false;
    next.visible = false;

    speeder1.visible = true;
    if (frameCount % 40 === 0) {
    enemy1 = createSprite(player.x,displayHeight - displayHeight);
    enemy1.addImage("trooper",enemyImg);
    enemy1.scale = 0.1;
    enemy1.velocityY = 30;
    speeder1.scale = 0.9;
    speeder1.y = displayHeight - displayHeight;
    speeder1.x = player.x;
    speeder1.velocityY = 30;
    enemyGroup.add(enemy1);
    enemyGroup.add(speeder1);
    }


   
   speeder.setCollider("rectangle",0,0,5,40,0);
   speeder1.setCollider("rectangle",0,0,5,40,0);

    speeder.scale = 0.9;
    player.scale = 0.06;

    if (ice.y > displayHeight/1.2){
      ice.y = displayHeight/2;
    }

    speeder.x = mouseX;
    
    speeder.scale = 0.9;
    player.scale = 0.06;
    player.x = mouseX;
    player.y = displayHeight - 300;
    speeder.y = player.y;

    if (frameCount % 1000 === 0) {

    }
   
    if (enemyGroup.isTouching(speeder)) {
      speeder.visible = false;
      player.visible = false;
      enemyGroup.visible = false;
      gameState = "end";
 }
  }
  if (gameState === "end") {
    background(255,0,0);
    end.visible = true;
    restart.visible = true;
    ice.visible = false;
  }
 //----------------------------------------------------------------------||
  drawSprites();
  if (gameState === "end" && keyIsDown(32)) {
    gameState = "level2start";
    ice.visible = true;
  }
}