const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }


    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    var circle_option={
        restitution:1.0,
        friction:0.5,
        density:0.8,
        // angularVelocity:10,
        // speed: 0.001
    }
ball=Bodies.circle(200,50,10,circle_option)

World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    
    ellipse(ball.position.x,ball.position.y,20,20)
    
}