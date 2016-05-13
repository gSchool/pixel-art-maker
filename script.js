'use strict';
for(var i =0; i < 2534; i++){
  var canvas = document.body.querySelector('section');
  //console.log(canvas);
  var newDiv = document.createElement('div');
  newDiv.classList.add("pixel");
  //newDiv.appendChild()
canvas.appendChild(newDiv);
newDiv.addEventListener("click", thisColor);
}


function thisColor(){
  //if you click on this color than that is the color of your paintbrush(all pixels you click on will become that color)
  event.target.style.backgroundColor = currentColor;
}

var colors = document.querySelectorAll('input');
console.log(colors.length);
for(var a = 0; a < colors.length; a++ ){
  console.log(colors[a]);
  //console.log(document.querySelector(colors[a]).value)
  colors[a].style.backgroundColor = colors[a].value;
  //console.log(colors[a].value);
}

var currentColor;
function currCol (event){
  currentColor = event.target.value;
  if(currentColor === "Eraser"){
    currentColor = "white";
  }
}

var colorTabs = document.getElementsByClassName('colorBTN');
console.log(document.getElementsByClassName('colorBTN'));

for(var z=0; z < colorTabs.length; z++){
colorTabs[z].addEventListener('click', currCol);
}

function eraser(event){

  event.target.style.backgroundColor = "white";
}
newDiv.addEventListener('click', eraser);
