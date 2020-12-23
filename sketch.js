const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles =[];
var plinkos = [];
var divisions= [];
var divHeight = 300;
function setup() {
  createCanvas(480,700);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(240,680,480,20);
    var j = 0 ;
    //creating divisons
    for(var k= 5 ;k<innerWidth;k=k+60){
      divisions.push(new Division(k,height-divHeight/2,5,divHeight));
    }
    //creating plinko's first line
    for( j = 0 ; j <= width; j = j+50){
      plinkos.push(new Plinko(j,75));
    }
    //creating plinko's second line
    for( j = 0 ; j <= width; j = j+50){
      plinkos.push(new Plinko(j,175));
    }
    //creating plinko's third line
    for( j = 0 ; j <= width; j = j+50){
      plinkos.push(new Plinko(j,275));
    }
 //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  ground.display();
  Engine.update(engine);
  var j= 0;
  for(var k= 0 ;k<=divisions.length-1;k++){
    divisions[k].display();
  }
  for( j = 0 ;j<plinkos.length ; j++){
    plinkos[j].display();
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10), 10,10));
   
  }

 for ( j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
 // drawSprites();

}