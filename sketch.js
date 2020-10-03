var bullet,speed,weight
var wall,thickness
function setup() {
  createCanvas(1600,400);

thickness = random(22,83);
speed = random(30,52);
weight = random(223,321);

bullet = createSprite(50,200,25,8);
wall = createSprite(1500,200,thickness,height/2);
wall.shapeColor = color(80,80,80);
bullet.shapeColor("white");

line1 = createSprite(750,250,1500,5);

line1.shapeColor = color(80,80,80);


}

function draw() {
  background(0,0,0); 
  
  if(bullet.isTouching(wall)){
    bullet,isStatic = true;
  }

  bullet.collide(wall);

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed *speed/(thickness*thickness*thickness);
  }

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if(damage < 10){
    wall.shapeColor = color(0,255,0)
  }
  drawSprites();
} 