// //basic test for projects logic
// /will eventually need to hard code the answers and 
// the circles 
// will also need to import sprites, (or use other 
// method based on what engine final project uses )

const { ipcRenderer } = require('electron');

let circles= [];
let ansBox= [];
let selected = null;
let following = false;
let ans = [];
let correctAns = [false,false,false,false];
var clr ='#dfdfdfff';
var prnt = null;
var prntClr;

let tempFrame;
let resetDelay = 1500;

function setup() {
  fullscreen(true);
  createCanvas(windowWidth, windowHeight);
  createCirc();
  createAnsBoxes();
  frameRate(60);
}

function draw() {
  let winW = width/10; 
  let winH = height/8;
  let safeSz = 600; 
  background(clr);
  text(millis(), )

  push(); //red x in top right
  fill('red');
  rect(width/1.1,50,50,50);
  textSize(70);
  fill('white');
  text('X',width/1.1,100);
  pop();

  push();
  fill("lightblue");

  rect(75,75,safeSz,safeSz,10);

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

  //logic to draw safe
  fill('whiteblue');
  rect(150,400,200,50);

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

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
