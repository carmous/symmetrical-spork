// //basic test for projects logic
// /will eventually need to hard code the answers and 
// the circles 
// will also need to import sprites, (or use other 
// method based on what engine final project uses )

const { ipcRenderer } = require('electron');



let circles= []; //arrays for badges and answer boxes
let ansBox= [];

let safeSz=600;
let handleRot=0;

let selected = null; //this is for the snap logic
let following = false;

let ans = [];//this allows acces to the correct answers in the json answer sheet
let correctAns = [false,false,false,false]; //this keeps track of what answer is coorect


var clr ='#dfdfdfff';
var prnt = null;
var prntClr;

let tempFrame;  //this is for the color resetting logic
let resetDelay = 1500;

let filename; //this is for the spriteprelaod funcition

//preloads ansershwer and images before programs runs
function preload(){
  answers = loadJSON('answerLogic/answerSheet.json');//loads answer sheet

  for (let i = 0; i<totalBadges ; i++){ //loads images and pushes them to array for access
    filename = `badgeSprites/badge${i}.png`;
    badgeImg.push(loadImage(filename));
  }
}

function setup() {
  fullscreen(true);
  createCanvas(windowWidth, windowHeight);
  createCirc();
  createAnsBoxes();
  tempImg = loadImage('badgeSprites/badge0.png');

  
}

function draw() {
  let winW = width/10; 
  let winH = height/8;
  
  background(clr);
  

  push(); //red x in top right
  fill('red');
  rect(width/1.1,50,50,50);
  textSize(70);
  fill('white');
  text('X',width/1.1,100);
  pop();

  push();
  fill("lightblue");

  drwSafe();

  // logic to draw cirlces and ansboxes 
  fill(clr);
  rectMode(CENTER);
  drawAnsBox();
    pop();
  drawCircles();

  //logic for click and follow mouse
  if (following && selected) {
    selected.x = mouseX;
    selected.y = mouseY;
  };

  //logic to draw safe handle
  drwHandle();
  rotHandle();
  
  

  snapAns();

  if ((clr!=='#dfdfdfff') && millis() - tempFrame >= resetDelay) { //code to reset color, only works here for some reason (probably because answer logic isnt being called for long enough)
    clr = '#dfdfdfff';  // Reset the color
    prnt = null;
  }

  if(prnt){
    push();
    textSize(50);
    text(prnt, width/2,width/2)
    pop();
  }



}

function click(obj){
  let d = dist(mouseX, mouseY, obj.x1,obj.x2);
  if(d<obj.sz/2){
    obj.x1=mouseX;
    obj.x2=mouseY;
  };
}

function mousePressed(){ //for dragging badges, changed to hold and drag for tablet realease
  if (!following) {
    
    for (let c of circles) {
      let d = dist(mouseX, mouseY, c.x, c.y);
      if (d < c.sz / 2) {
        selected = c;
        following = true; // start following
        break;
      };
    };
  }

  if(dist(mouseX,mouseY,width/1.1+25,100-25)<=25)
    ipcRenderer.send('quit-app');

  if(dist(mouseX,mouseY,150+100,400+25)<150/2){ // checks for correct answers when lever is clicked
    check_All_Ans(tempFrame);
  }

}

function mouseReleased(){
  following = false;
  selected = null;
}

function windowResized(){ //loading window to mach screen size
  resizeCanvas(windowWidth, windowHeight);
}


function drwSafe(){
  let x = 20
  push();
  translate(75,75)
  fill("lightblue");
  rect(safeSz*.12,safeSz-50,100,100,35);
  rect(safeSz*.72,safeSz-50,100,100,35);
 
  rect(0,0,safeSz,safeSz,10);
  
  rect(0+x,0+x,safeSz-2*x,safeSz-2*x,10);

  pop();
  

  
 
 
}

function drwHandle(){
  fill('whiteblue'); //handle
  push();
  
  translate(350,425);
  rotate(handleRot);
  


  beginShape();
  vertex(-200,-20);
  vertex(-200,20);
  vertex(0,20);
  bezierVertex(20,20,20,-20,0,-20);
  endShape(CLOSE);


  pop();
}

function rotHandle(){
  angleMode(DEGREES);
  if((dist(mouseX,mouseY,150+100,400+25)<150/2)){ // checks for correct answers when lever is clicked
    if(handleRot >= -35  && handleRot<1)
      handleRot= handleRot-5;  
  
  }else{ handleRot=0;}

}
