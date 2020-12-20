var moving,fixed;

function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 50, 50, 50);
  moving.shapeColor="blue";
  moving.velocityY = 2;
  fixed = createSprite(400,350,50,80)
  fixed.shapeColor=color(0,255,0);
  fixed.velocityY = -2;

  obmoving = createSprite(100,100,50,50);
  obfixed = createSprite(200,00,50,50);

}

function draw() {
  background(10);  
  
obmoving.x = mouseX;
obmoving.y = mouseY;

if(isTouching(obmoving,obfixed)){
  obmoving.shapeColor="red";
  obfixed.shapeColor="red";
}else{
  obmoving.shapeColor="yellow";
  obfixed.shapeColor="yellow";
} 

bounceOff(moving,fixed);

  drawSprites();
}

