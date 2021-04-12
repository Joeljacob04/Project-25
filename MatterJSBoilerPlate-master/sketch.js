
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(150,580,70);

	ground = new Ground(600,590,1200,20);

	dustbin = new Dustbin(530,620,190,220);

	var render = Render.create({ 
		element: document.body, 
		engine: engine, 
		options: { width: 1600, height: 700, wireframes: false }
	 });

	Engine.run(engine);
    Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

  paper.display();

  ground.display();

  dustbin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1015});
	}
}



