
let badgeImg = [];
let totalBadges = 5;

//logic to dynamically load badges



function createCirc(){
  var y=150;
  for(var i=0; i<totalBadges; i++){
   circles.push({
     x: 1000,
     y: y + i * 60,
     sz: 50,
     index: i,
     img: badgeImg[i],
     snapd:false,
     slSz:25
      
    });
  }
}

//will need to be changed to draw badgeImg[i].jpg instead of circles

//change t      snapd logic to change variable within the array of create circ!!
function drawCircles() {
  for (let c of circles) {
    //the code for loading imgages instead of debugCircles
    // imageMode(CENTER);
    // Image(c.img, c.x,c.y,c.sz,c.sz)

    if(!c.snapd){
    circle(c.x, c.y, c.sz);
    }else{
    circle(c.x, c.y, c.slSz);
    }
    
    push();
    fill("black");
    text(c.index,c.x-3,c.y+3)
    pop();
    
  }
}
