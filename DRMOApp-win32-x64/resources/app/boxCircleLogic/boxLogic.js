function createAnsBoxes(){
  let safeSz = 600;
  
 
  for(var i=0;i<4;i++) {
      ansBox.push({
        x: 105 + i* ((safeSz)/3),
        y: 150,
        h: 70,
        w: 10,
        index: i
      });
      }
}

function drawAnsBox(){
    
    for (let b of ansBox){
      rect(b.x,b.y,b.h,b.w,10);
    }
}