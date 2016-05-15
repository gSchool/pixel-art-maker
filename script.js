'use strict';

document.body.style.backgroundColor = "black";
var winDiv = document.createElement('div');
document.body.appendChild(winDiv);
for (var i = 0; i < 4326; i++){
  var newDiv = document.createElement('div');
  winDiv.appendChild(newDiv);
  newDiv.style.width = "0.9%";
  newDiv.style.cssFloat = "left";
  newDiv.style.paddingBottom = "0.9%";
  newDiv.style.backgroundColor = "white";
  newDiv.style.borderTop = "1px dotted grey";
  newDiv.style.borderLeft = "1px dotted grey";
  newDiv.classList.add('pixel');
}

var pal = document.createElement('div');
document.body.appendChild(pal);
pal.style.width = "100%";
pal.style.backgroundColor= "grey";
pal.style.cssFloat = "left";
pal.style.marginTop = "1%";

winDiv.addEventListener('mousedown', paintbrushOn);
document.body.addEventListener('mouseup', paintbrushOff);
winDiv.addEventListener('mousedown', changeColor);
winDiv.addEventListener('dblclick', reset);

var color = "black";

var commonColors = ["black", "white", "red", "blue", "yellow", "green", "orange", "purple"];
for (i = 0; i < 8; i++) {
  var colorSelector = document.createElement('div');
  var thisColor = document.body.lastChild.appendChild(colorSelector);
  thisColor.style.width = "45px";
  thisColor.style.paddingBottom = "45px";
  thisColor.style.backgroundColor = commonColors[i];
  thisColor.style.borderRadius = "50%";
  thisColor.style.cssFloat = "left";
  thisColor.style.margin = "20px";
  thisColor.classList.add('classic');
}

var currentColor = document.createElement('div');
var tracker = document.body.lastChild.appendChild(currentColor);
tracker.style.cssFloat = "right";
tracker.innerHTML = "<h1 style='float: left'>CURRENT COLOR: </h1><div class='current' style='width: 45px; padding-bottom: 45px; border-radius: 50%; margin: 20px; float: right'></div>";
document.querySelector('.current').style.backgroundColor = color;

pal.innerHTML += "<div style='width: 45px; padding-bottom: 45px; border-radius: 50%; margin: 20px; float'><input type='color' onchange='newColorFromInput(event)' value='white'><h1>Custom</h1></input></div>";

for (i = 0; i < document.querySelectorAll('.classic').length; i++) {
  document.querySelectorAll('.classic')[i].addEventListener('click', newColorFromClassic);
}

function newColorFromClassic(event) {
  color = event.target.style.backgroundColor;
  document.querySelector('.current').style.backgroundColor = color;
}
function newColorFromInput(event) {
  color = event.target.value;
  document.querySelector('.current').style.backgroundColor = color;
}

function changeColor(event) {
  event.target.style.backgroundColor = color;
  event.target.style.borderTop = "1px solid " + color;
  event.target.style.borderLeft = "1px solid " + color;
}

function paintbrushOn() {
  var pixels = document.querySelectorAll('.pixel');
  for (i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('mouseover', changeColor);
  }
}

function paintbrushOff() {
  var pixels = document.querySelectorAll('.pixel');
  for (i = 0; i < pixels.length; i++) {
    pixels[i].removeEventListener('mouseover', changeColor);
  }
}

function reset() {
  var pixels = document.querySelectorAll('.pixel');
  for (i = 0; i < pixels.length; i++) {
    pixels[i].style.backgroundColor = "white";
    pixels[i].style.borderTop = "1px dotted grey";
    pixels[i].style.borderLeft = "1px dotted grey";
  }
}
