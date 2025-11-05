
let badgeImg = [];
let totalBadges = 5;

//logic to dynamically load badges
function preload(){
  for (let i = 0; i<totalbadges ; i++){
    let filename = `badgeSprites/badge${i}.png`;
    badgeImg.push(loadImage(filename));
  }
}


function createCirc(){
  var y=150;
  for(var i=0; i<totalBadges; i++){
   circles.push({
     x: 700,
     y: y + i * 60,
     sz: 50,
     index: i,
     img: badgeImg[i]
      
    });
  }
}

//will need to be changed to draw badgeImg[i].png instead of circles
function drawCircles() {
  for (let c of circles) {
    circle(c.x, c.y, c.sz);
    push();
    fill("black");
    text(c.index,c.x-3,c.y+3)
    pop();
  }
}
