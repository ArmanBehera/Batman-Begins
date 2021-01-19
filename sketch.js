const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var dropsArray = [];
var maxDrops = 100;
var thunderImage;

function preload(){
    
    thunderImage = loadImage("Thunder.png");
}

function setup(){
   
    createCanvas(600, 700);

    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(300, 570);
 if(frameCount % 150 === 0){
    for (var i = 0; i < maxDrops; i++){

        dropsArray.push(new Drops(random(0, 600), random(0, 300)));
    }
 }
    Engine.run(engine);
}

function draw(){
    
    background(0);

    // Engine.update(engine);

    for (var i = 0; i < maxDrops; i++){

        dropsArray[i].display();
        dropsArray[i].updateY();
        
    }

    /* if (this.rain.position.y > 700){

        Matter.Body.setPosition(this.rain, {x : random(0, 600), y : random(0, 300)});
    } */

    umbrella.display();

    if (frameCount % 26  === 0|| frameCount % 28  === 0 || frameCount % 30 === 0){

        imageMode(CENTER);
        image(thunderImage, 300, 100, 100, 300);
    }
}