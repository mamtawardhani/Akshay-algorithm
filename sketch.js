//variables to name the sprites
var movingRect, fixedRect

function setup() { 
  //reads only once
  createCanvas(800,400);

  //creating sprites
  movingRect = createSprite(10,10, 40, 100)    // x value, y value, width , height
  fixedRect = createSprite(400, 200, 100,40)

  movingRect.shapeColor = "green"    //color the shape / sprite
  fixedRect.shapeColor = "green"

  movingRect.debug = true        // made the centers visible
  fixedRect.debug = true

}

function draw() {
  //reads more than once
  background("peachpuff");  

  movingRect.x = mouseX    // allows the sprite to move with respcet to the mouse position
  movingRect.y = mouseY


  if(movingRect.x - fixedRect.x <= movingRect.width / 2 + fixedRect.width / 2  ){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }

  console.log(movingRect.x - fixedRect.x)

  drawSprites();
}