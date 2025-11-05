function createAnsBoxes(){
  
  
  let x=120;
  for(var i=0;i<4;i++) {
      ansBox.push({
        x: x + i* 75,
        y: 250,
        h: 70,
        w: 10,
        index: i
      });
      }
}

function drawAnsBox(){
    for (let b of ansBox){
      rect(b.x,b.y,b.h,b.w);
    }
}