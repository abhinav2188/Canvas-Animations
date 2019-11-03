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


//
// function whirpool(x,y,r,linefactor,startingAngle, endingAngle){
//   while(r>linefactor)
//   {
//     c.beginPath();
//     c.arc(x,y,r,Math.PI*startingAngle,Math.PI*endingAngle,true);
//     r = r - linefactor;
//     var x2 = x+r*Math.cos(Math.PI*endingAngle);
//     var y2 = y+r*Math.sin(Math.PI*endingAngle);
//     c.lineTo(x2,y2);
//     console.log(r);
//     c.arc(x,y,r,Math.PI*endingAngle,Math.PI*startingAngle,false);
//     r = r- linefactor;
//     var x1 = x+r*Math.cos(Math.PI*startingAngle);
//     var y1 = y+r*Math.sin(Math.PI*startingAngle);
//     c.lineTo(x1,y1);
//     c.stroke();
//   }
// }
//
//
// setInterval(function(){
//   whirpool(getRandomX(),getRandomY(),getRandomX(),10,Math.random()*2,Math.random()*2);
// },2000);

function drawArc(x,y,r,s,e){
  var id =
  setInterval(function(){
    if(s>e)
    clearInterval(id);
    c.beginPath();
    c.arc(x,y,r,Math.PI*s,Math.PI*(s+0.01),false);
    c.stroke();
    s+=0.01;
  },2);
  c.stroke();
  }
//    drawArc(100,200,50,1.5,2);
// whirpool(600,600,100,10,.225,1.25);
// whirpool(300,300,300,20,0,0.2)
// setInterval(function(){
//   c.lineTo(,getRandomY());
//   c.stroke();
// },1000)
// c.arc(canvas.width/2,canvas.height/2,90,Math.PI*.5,Math.PI,false);
