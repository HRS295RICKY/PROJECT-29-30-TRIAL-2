const Engine = Matter.Engine;
const World = Matter.world;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,ground1;
var block1,block2;

function preload(){
    
}

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create ();
world = engine.World;

ground1 = new ground(600,390,1200,20);
block1 = new block(300,300,50,50);
block2 = new block (400,200,50,50);
}

function draw(){
background("black");
Engine.update(engine); 

ground1.display();
fill("red");
block1.display();
block2.display();
}
