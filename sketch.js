
function preload() {

    
    backgroundImage=loadImage("garden.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
    background=createSprite(500,400);
    background.addImage(backgroundImage);


}

function draw() {

    background(255);


    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
