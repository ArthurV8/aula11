var trex, trex_running, trex_collided;
var ground,invisivel, groundImage;

function preload() {
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png")
}
function setup() {
createCanvas(600, 200);
//criar um sprite trex
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
//criar um sprite ground (chão)
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
invisivel=createSprite(100,190,400,20);
invisivel.visible=false;
}
function draw() {
background(220);
console.log(trex.y);
//pular quando a barra de espaço é pressionada
if (keyDown("space")&&trex.y>=100) {
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.8
if (ground.x < 0) {
ground.x = ground.width / 2;
}
trex.collide(invisivel);
drawSprites();
}