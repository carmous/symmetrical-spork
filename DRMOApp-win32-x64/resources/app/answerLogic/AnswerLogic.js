//logic for answers is based off of index, and correct match of index is set in the json file

//logic to load the answerSheet file
let answers;

function preload(){
  answers = loadJSON('answerLogic/answerSheet.json');

  for (let i = 0; i<totalbadges ; i++){
    let filename = `badgeSprites/badge${i}.jpg`;
    badgeImg.push(loadImage(filename));
  }
}

function snapAns(){
 for (var c of circles){
    if (c !== selected){ // don't snap the one you're dragging
      
      for (var b of ansBox){
        
        
        let d = checkDist(c,b);
     
        if(d < c.sz/2){
          // snap circle to box
          c.x = b.x;
          c.y = b.y;

         
          // check if answer is correct for box it snapped too
          let correctCircleIndex = answers[b.index]
          if(c.index == correctCircleIndex){
            correctAns[b.index]= true;
          } else { correctAns[b.index] = false;}
          
          
        }
      }
    }
  }
}

function checkAns(obj1,obj2){
  if(obj1.index==obj2.index){
    correctAns=true;
  } else{ correctAns = false;}
  
}

function checkDist(obj1,obj2){
  
  return dist(obj1.x, obj1.y, obj2.x,obj2.y);
}

function check_All_Ans(){
  
    if(correctAns[0]&&correctAns[1]&&correctAns[2]&&correctAns[3]){
    clr = "green"
      push();
      textSize(50);
      fill("green");
    text("Correct!!!", width/2, height/2, 500,500);
      pop();
  
    }else{}
  
}