'use strict';

//style big container (div#2)

document.querySelector('#container').style.width = '75%';
document.querySelector('#container').style.height = '700px';
document.querySelector('#container').style.border = '2px solid grey';
document.querySelector('#container').style.backgroundColor = 'black';
document.querySelector('#container').style.position = 'relative';
document.querySelector('#container').style.left = '12.5%';
document.querySelector('#container').style.borderRadius = '5px';

var container = document.querySelector('#container');

//style color picker (div#4)
document.querySelector('#colorPicker').style.width = '70%';
document.querySelector('#colorPicker').style.height = '100px';
document.querySelector('#colorPicker').style.border = '2px solid';
document.querySelector('#colorPicker').style.borderRadius = '8px';
document.querySelector('#colorPicker').style.backgroundColor = '#f0f8ff';
document.querySelector('#colorPicker').style.position = 'relative';
document.querySelector('#colorPicker').style.left = '15%';

var colorPicker = document.querySelector('#colorPicker');

//style color palettes (divs#5)

var colorPalette = ['#f0f20e','#f2ad06','#f23708', '#fd62d7', '#a403b8','#0699f2', '#069a36', '#b0660a' ,'#b0a8ae', '#040004'];

function makeColor() {
  for (var color = 0; color < colorPalette.length; color++) {
    var currentColor = document.createElement('div');
    colorPicker.appendChild(currentColor);
    currentColor.style.width = '50px';
    currentColor.style.height = '30px';
    currentColor.style.border = '2px solid';
    currentColor.style.borderTopLeftRadius = '30px';
    currentColor.style.borderBottomRightRadius = '30px';
    currentColor.style.backgroundColor = colorPalette[color];
    currentColor.style.display = 'inline-block';
    currentColor.style.margin = '10px';
    currentColor.addEventListener('click', chooseColor);
  }
}

makeColor();

//TODO: currentColor text:

//TODO: currentColor div

var textDiv = document.createElement('div');
colorPicker.appendChild(textDiv);
textDiv.style.display = 'inline-block';
textDiv.style.margin = '10px';


var currentColorText = document.createElement('h3');
currentColorText.innerHTML = 'current color';
currentColorText.style.fontFamily = 'Copperplate';
textDiv.appendChild(currentColorText);

var currentColorDiv = document.createElement('div');
colorPicker.appendChild(currentColorDiv);
currentColorDiv.style.width = '50px';
currentColorDiv.style.height = '30px';
currentColorDiv.style.border = '2px solid';
currentColorDiv.style.borderTopLeftRadius = '30px';
currentColorDiv.style.borderBottomRightRadius = '30px';
currentColorDiv.style.display = 'inline-block';


//make loop to create divs to container div (divs#3)
function makePixels() {
  for (var i = 0; i <= 3470; i++) {
    var pixels = document.createElement('div');
    pixels.style.height = '14px';
    pixels.style.width = '10px';
    pixels.style.border = '1px solid black';
    pixels.style.backgroundColor = 'white';
    pixels.style.display = 'inline-block';
    pixels.style.verticalAlign = 'top';
    pixels.addEventListener('click', turnColor);
    container.appendChild(pixels);
  }
}

makePixels();

//Apply EventListener so that when colors of colorPicker
//are clicked on, you select that color

//save chosen color in variable so that you can retrieve it when
//you go to paint
var currentColor;

function chooseColor(event) {
  currentColor = event.target.style.backgroundColor;
  currentColorDiv.style.backgroundColor = currentColor;
  console.log(currentColor);
}

var hasEvent = true;

//make div turn to color and then  go back to white when you keep on clicking
function turnColor(event) {
  if (hasEvent) {
    event.target.style.backgroundColor = currentColor;
    hasEvent = false;
  } else {
    event.target.style.backgroundColor = 'white';
    hasEvent = true;
  }
}
