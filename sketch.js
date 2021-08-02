 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 
 var engine;
 var world;

 
 
 
 function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

   var gOptions ={
     isStatic: true
   }
  
  ground = Bodies.rectangle(200,390,400,20,gOptions);
  World.add(world,ground);

  var bOptions ={
    restitution: 1
  }
  ball = Bodies.circle(200,100,20,bOptions);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ellipseMode(RADIUS);

  //rect(object.position.x,object.position.y,50,50);
  ellipse(ball.position.x,ball.position.y,20,20);

}