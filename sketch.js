const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;
var launcher;

function preload(){
    binImg = loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);

    launcher = new Launcher(crumpledPaper.body,{x: 200, y:100});
}


function draw(){
    background("white");
    Engine.update(engine);

    
    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
    launcher.display();
    
    drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(crumpledPaper.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    launcher.fly();
}




