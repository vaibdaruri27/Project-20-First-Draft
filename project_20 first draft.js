//Call and wall and speed and weight sprites
var call, wall;
var speed, weight;
var deformation;

//Setup function
function setup() {
  //Creating the canvas
  createCanvas(1600, 400);

  //Giving values to speed and weight
  speed = random(55, 90);
  weight = random(400, 1500);

  //car
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  //wall
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);

  //Boundaries
  var boundary1 = createSprite(0, 50, 4000, 10);
  var boundary2 = createSprite(0, 350, 4000, 10);
  boundary1.shapeColor = "white";
  boundary2.shapeColor = "white";
}

function draw() {
  //Background
  background(0, 0, 0);
  
  //drawsprites();
  drawSprites();
  
  //Collision and deformation
  if (wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    deformation = (0.5 * weight * speed * speed)/22509;

    if (deformation > 180) {
      car.shapeColor = color(255,0,0);
    }

    if (deformtion < 180 && deformation > 100) {
      car.shapeColor = color(230,230,0);
    }

    if (deformation < 100) {
      car.shapeColor = color(0,255,0);
    }
  }
}