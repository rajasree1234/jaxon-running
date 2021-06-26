var jaxon, jaxon_running, edges;
var pathImage;
var path;
var invisibleboundary1,invisibleboundary2;
function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
    pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,150,20,20);
    path.addImage("path",pathImage);
    path.velocityY=4;
    path.scale = 1.2;

    
    jaxon = createSprite(200,195,20,50);
    jaxon.addAnimation("running", jaxon_running);
    jaxon.scale=0.05;

    invisibleboundary1=createSprite(360,200,15,400);
    invisibleboundary1.visible=false;

    invisibleboundary2=createSprite(40,200,15,400);
    invisibleboundary2.visible=false;

    edges = createEdgeSprites();
    
    
    
   
}

function draw() {
  background(0);

if(path.y>400){
   path.y=height/2
}

if(keyDown("right")){
  jaxon.velocityX=4;
  
}
    
if(keyDown("left")){
  jaxon.velocityX=-4;
  
}

jaxon.collide(invisibleboundary1);
jaxon.collide(invisibleboundary2);
drawSprites();

}
