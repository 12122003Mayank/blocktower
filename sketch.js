const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(900,400)
  engine = Engine.create();
	world = engine.world;
  ground= new Ground(450,390,900,10)
  stand1= new Ground(390,300,250,10)
  block= new Block(300,275,40,40)
  block2= new Block(340,275,40,40)
  block3= new Block(380,275,40,40)
  block4= new Block(420,275,40,40)
  block5= new Block(460,275,40,40)

  block6= new Block(320,235,40,40)
  block7= new Block(360,235,40,40)
  block8= new Block(400,235,40,40)
  block9= new Block(440,235,40,40)

  block10= new Block(340,195,40,40)
  block11= new Block(380,195,40,40)
  block12= new Block(420,195,40,40)

  block13= new Block(360,155,40,40)
  block14= new Block(400,155,40,40)

  block15= new Block(380,115,40,40)
}

function draw() {
  background("green");  
  ground.display();
  stand1.display();
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("yellow")
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  fill("red")
  block10.display();
  block11.display();
  block12.display();
  fill("pink")
  block13.display();
  block14.display();
  fill("blue")
  block15.display();
}