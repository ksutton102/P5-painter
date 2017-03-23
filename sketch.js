var a;
var b;
var newHeight;

function setup(){
    createCanvas(600,400);
    background(150,210,150);
    a = 50
    b = 50
    newHeight = a + b;
    
    
    
}

function draw(){
    noStroke();
    fill(255,0,100,255);
    ellipse(mouseX,mouseY,50,50);
   
    
    if(mouseIsPressed){
        noStroke();
        fill(163, 65, 244,255);
        ellipse(mouseX,mouseY,50,50);
    }
    
}
