// a static whirpool

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function getRandomColor(){c.stroke();
  var r = Math.floor(Math.random() * 256).toString(16);
  var g = Math.floor(Math.random() * 256).toString(16);
  var b = Math.floor(Math.random() * 256).toString(16);
  var x = '#'+r+g+b;
  return x;
}
function getRandomY(){
  return Math.floor(Math.random() * canvas.height);
}
function getRandomX(){
  return Math.floor(Math.random() * canvas.width);
}


function whirpool(x,y,r,linefactor,startingAngle, endingAngle){
  while(r>=linefactor)
  {
    c.beginPath();
    c.arc(x,y,r,Math.PI*startingAngle,Math.PI*endingAngle,true);
    r = r - linefactor;
    var x2 = x+r*Math.cos(Math.PI*endingAngle);
    var y2 = y+r*Math.sin(Math.PI*endingAngle);
    c.lineTo(x2,y2);
    c.arc(x,y,r,Math.PI*endingAngle,Math.PI*startingAngle,false);
    r = r- linefactor;
    var x1 = x+r*Math.cos(Math.PI*startingAngle);
    var y1 = y+r*Math.sin(Math.PI*startingAngle);
    c.lineTo(x1,y1);
    c.stroke();
  }

}


setInterval(function(){
  c.strokeStyle = getRandomColor();
  whirpool(getRandomX(),getRandomY(),Math.random()*100,10,Math.random()*2,Math.random()*2);
},500);
// 
// setInterval(function(){
//   c.clearRect(0,0,canvas.width,canvas.height);
// },5000);
