const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var box;
var box2;
var world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box = new Box(150,200,40,50);
  box2 = new Box(180,100,40,100);
  ground = new Ground(300,390,700,5);
  }

function draw() {
  background(0); 
  Engine.update(engine); 
  box.display();
  box2.display();
  ground.display();
  drawSprites();
}