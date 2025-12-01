
let badgeImg = [];
let totalBadges = 5;

//logic to dynamically load badges



function createCirc(){
  var y=150;
  for(var i=0; i<totalBadges; i++){
   circles.push({
     x: width*.75,
     y: y + i *  465,
     sz: 150,
     index: i,
     img: badgeImg[i],
     snapd:false,
     slSz:100
      
    });
  }
}

//will need to be changed to draw badgeImg[i].jpg instead of circles

//change t      snapd logic to change variable within the array of create circ!!
function drawCircles() {
  for (let c of circles) {
    //the code for loading imgages instead of debugCircles
    imageMode(CENTER);
   

    if(!c.snapd){
    
     image(c.img, c.x,c.y,c.sz,c.sz);
    }else{
     image(c.img, c.x,c.y,c.slSz,c.slSz);
    }
    
   
    
  }
}
