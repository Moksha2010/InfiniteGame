//var runner, runnerImg;
var bgImg, bg;

function preload() {
runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
bgImg = loadImage("straightroad.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight);



 bg = createSprite(width/2, height/2, width, height);
 bg.addImage(bgImg);
 bg.velocityY = 2;
 bg.scale = 3;

runner = createSprite(width/2, height-100, 30, 30);
runner.addAnimation("player",runnerImg);
runner.scale = 0.10;
}

function draw() {
    background(0);
    if(bg.y > 390){
      bg.y = 300
    }
    drawSprites();
}