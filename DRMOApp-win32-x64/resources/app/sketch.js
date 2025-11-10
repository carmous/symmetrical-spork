// //basic test for projects logic
// /will eventually need to hard code the answers and 
// the circles 
// will also need to import sprites, (or use other 
// method based on what engine final project uses )


  let circles= [];
  let ansBox= [];
  let selected = null;
  let following = false;
  let ans = [];
  let correctAns = [false,false,false,false];
  var clr="white"
 

function setup() {
  fullscreen(true);
  createCanvas(windowWidth, windowHeight);
  createCirc();
  createAnsBoxes();
  
  
}

function draw() {
  let winW = width/10; 
  let winH = height/8;
  let safeSz = 600; 
  background(220);

  push();
  fill("lightblue");

  

  rect(75,75,safeSz,safeSz,10);

  // logic to draw cirlces and ansboxes 
 
  
  fill(clr)
  rectMode(CENTER);
  drawAnsBox();
    pop();
  drawCircles();

 
  //logic for click and follow mouse
  if (following && selected) {
    selected.x = mouseX;
    selected.y = mouseY;
  };
  
  //logic to check answers
  snapAns();
  check_All_Ans();
  
}

function click(obj){
  let d = dist(mouseX, mouseY, obj.x1,obj.x2);
  if(d<obj.sz/2){
    obj.x1=mouseX;
    obj.x2=mouseY;
  };
}


function mousePressed(){

  if (!following) {
    // first click: check if you clicked a circle
    for (let c of circles) {
      let d = dist(mouseX, mouseY, c.x, c.y);
      if (d < c.sz / 2) {
        selected = c;
        following = true; // start following
        break;
      };
    };
  } else {
    
   
    following = false;
    selected = null;

  };
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


