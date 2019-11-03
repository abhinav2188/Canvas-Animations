// Random Rectangle lines animation

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

var x1 = getRandomX();
var y1 = getRandomY();
var x2 = getRandomX();
var y2 = getRandomY();

var an = setInterval(function(){
  c.beginPath();
  c.moveTo(x1,y1);
  c.lineTo(x1,y2);
  c.lineTo(x2,y2);
  c.strokeStyle = getRandomColor();
  c.stroke();
  x1 = x2;
  y1 = y2;
  x2 = getRandomX();
  y2 = getRandomY();
},200)
//
// setInterval(function(){
//   c.clearRect(0,0,canvas.width,canvas.height);
// },1000);
