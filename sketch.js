
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground
var bin1,bin2,bin3

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	bin1 = new Dustbin(900,550,200,300)




	//Create the Bodies Here.

	paper = new Paper(50, 100, 5,5)
	paper.scale = 0.125

	

	ground = new Ground(400,700,2000,10)
	


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  

  
	paper.display();

	ground.show();
	bin1.display()


 
}

function keyPressed(){
	if(keyCode ===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1.75 , y:-1.75	})
	}
}



