// Strict mode
'use strict';

// Grid container element
const screen = document.querySelector('#screen');

// Controls element
const controls = document.getElementById('controls');

// Empty array to hold grid squares
const grid = [];
//Adds a current color box to show the users color
let currentColorBox = document.getElementById('currentColor')
let assignedCurrentColor = currentColorBox.style.backgroundColor = 'black'
let paintColor = "black";

// Drawing defaults to false until changed with event listener
let draw = false;


// Generate grid squares in container element
let paintPixels = 4437
for(let i = 0; i < paintPixels; i++) {
  let square = document.createElement('div');
  square.classList.add('square');
  screen.appendChild(square);
  grid.push(square);
}

// Color change button event listeners
let colorButtons = document.querySelectorAll('#controls button')

for (let i = 0; i < colorButtons.length; i++){
    colorButtons[i].addEventListener('click', function() {
        paintColor = colorButtons[i].id;
        currentColorBox.style.backgroundColor = colorButtons[i].id
      });
}
//Changes color to white to erase lines
let eraserButton = document.getElementById('eraser');
eraserButton.addEventListener('click', function (){
  paintColor = 'white'
  currentColorBox.style.backgroundColor = 'white'
})
//Allows user to reset cursor color to black and makes the default color black
currentColorBox.addEventListener('click', function() {
    paintColor = 'black'
    currentColorBox.style.backgroundColor = 'black'
})

let squares = document.querySelectorAll('.square');
let clearButton = document.getElementById('clear')

for(let i = 0; i < squares.length; i++) {
  // If user mouses over square && mouse is pressed down
  squares[i].addEventListener("mouseover", function() {
    if(!draw) return;
    squares[i].style.backgroundColor = paintColor;
  });
  // If user clicks on a square
  squares[i].addEventListener("click", function() {
    squares[i].style.backgroundColor = paintColor;
  });
  clearButton.addEventListener('click', function(){
      squares[i].style.backgroundColor = 'white'
  });
}


// If the user is holding there mouse down, draw is true
window.addEventListener('mousedown', function() { draw = true; });
// When the user lets up on the mouse button draw is set back to false
window.addEventListener('mouseup', function() { draw = false; });