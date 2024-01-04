
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg
var building,building2,buildingImg
var helicopter,helicopter_leftImg,helicopter_rightImg
var supplies,suppliesImg
var button
var score

function preload(){
  backgroundImg = loadImage("background.jpg")
  buildingImg = loadImage("building-flat-2D.png")
  helicopter_leftImg = loadImage("Helicopter_left.png")
  helicopter_rightImg = loadImage("Helicopter_right.png")
  suppliesImg = loadImage("Package.png")
 
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  building = Bodies.rectangle(160, 350, 260, 410, options);
  World.add(world, building);

  building2 = Bodies.rectangle(760, 350, 260, 410, options);
  World.add(world, building2);

  helicopter = createSprite(800,75,50,50)
  helicopter.addImage(helicopter_leftImg)
  helicopter.velocityX = -10
  helicopter.scale = 0.06
  
  helicopter.addAnimation("lefttoright",helicopter_rightImg)
  helicopter.addAnimation("righttoleft",helicopter_leftImg)

  button = createImg('button.jpg');
  button.position(850,10);
  button.size(100,75);
  button.mouseClicked(drop);


 
}


function draw() 
{
  background(51);
  
  image(backgroundImg, 0, 0, width, height);

  textSize(10)
  fill(5,6,7)
  text("If you hit the building with the packages, then you win!",200,800)

  push()
  imageMode(CENTER)
  image(buildingImg,building.position.x, building.position.y, 260, 410);
  pop()

  push()
  imageMode(CENTER)
  image(buildingImg,building2.position.x, building2.position.y, 260, 410);
  pop()

  if (helicopter.position.x <= width - 900) {
    helicopter.velocityX = 10;
    helicopter.changeAnimation("lefttoright");
  }

  if (helicopter.position.x >= width - 100) {
    helicopter.velocityX = -10;
    helicopter.changeAnimation("righttoleft");
  }


  drawSprites()
  Engine.update(engine);
  
}

function drop(){
  supplies = createSprite(helicopter.x,100,20,20)
  supplies.addImage(suppliesImg)
  supplies.isVisible = false
  supplies.scale = 0.03
  supplies.velocityY = 8 

   /*  var options = {
    isStatic: true
   }
  supplies = Bodies.rectangle(helicopter.x, 100, 20, 20, options);
  World.add(world, supplies);

  push()
  imageMode(CENTER)
  image(suppliesImg, supplies.position.x, supplies.position.y, 20, 20);
  pop()   */
}

/*function collide(body,sprite,x){
          var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y)
           if(d<=x)
            {
              return true
            }
            else{
              return false
            }
}*/

/*if(collide(building,supplies,5)==true){
  supplies.visible = false
} */