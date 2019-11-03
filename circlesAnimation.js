
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


// random circles drawing animation

var cx = getRandomX();
var cy = getRandomY();
var x = 0;
var y = .01;
var r = 50;


// random full length circles with different
setInterval(function(){
  if(y>2){
    cx = getRandomX();
    cy = getRandomY();
    c.strokeStyle = getRandomColor();
    r = r + 50;
    if(r>1000)
      r = 50;
    y=0;
  }
  c.beginPath();
  c.arc(cx,cy,r,Math.PI*x,Math.PI*y,false);

  c.moveTo
  c.stroke();
  x = y;
  y = y + 0.05;
},1)


setInterval(function(){
  c.clearRect(0,0,canvas.width,canvas.height);
},5000);
