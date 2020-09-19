var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,20);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall=createSprite(1400,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(255,255,255);  

  if(wall.x-bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness

    if(damage >10){
      bullet.shapeColor = "red";
    }

    if(damage<10){
      bullet.shapeColor= "green";
    }
    console.log(damage);
  }

  drawSprites();
}