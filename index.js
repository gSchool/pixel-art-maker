// Strict mode
'use strict';

// Grid container element
const screen = document.querySelector('#screen');

// Controls element
const controls = document.getElementById('controls');

// Empty array to hold grid squares
const grid = [];
let currentColorBox = document.getElementById('currentColor')
let assignedCurrentColor = currentColorBox.style.backgroundColor = 'black'
let color = "black";

// Drawing defaults to false until changed with event listener
let draw = false;


// Generate grid squares in container element
for(let i = 0; i < 1914; i++) {
  let square = document.createElement('div');
  square.classList.add('square');
  screen.appendChild(square);
  grid.push(square);
}

// Color change button event listeners

let redButton = document.getElementById('red');
redButton.addEventListener('click', function() {
  color = redButton.id;
  currentColorBox.style.backgroundColor = redButton.id
});
let greenButton = document.getElementById('green');
greenButton.addEventListener('click', function() {
  color = greenButton.id;
  currentColorBox.style.backgroundColor = greenButton.id
});
let blueButton = document.getElementById('blue');
blueButton.addEventListener('click', function() {
  color = blueButton.id;
  currentColorBox.style.backgroundColor = blueButton.id
});
let purpleButton = document.getElementById('purple');
purpleButton.addEventListener('click', function(){
  color = purpleButton.id
  currentColorBox.style.backgroundColor = purpleButton.id
})
let yellowButton = document.getElementById('yellow');
yellowButton.addEventListener('click', function(){
  color = yellowButton.id
  currentColorBox.style.backgroundColor = yellowButton.id
})
let brownButton = document.getElementById('brown');
brownButton.addEventListener('click', function() {
  color = brownButton.id;
  currentColorBox.style.backgroundColor = brownButton.id
});
let pinkButton = document.getElementById('pink');
pinkButton.addEventListener('click', function(){
  color = pinkButton.id
  currentColorBox.style.backgroundColor = pinkButton.id
})
let greyButton = document.getElementById('grey');
greyButton.addEventListener('click', function(){
  color = greyButton.id
  currentColorBox.style.backgroundColor = greyButton.id
})
let eraserButton = document.getElementById('eraser');
eraserButton.addEventListener('click', function (){
  color = 'white'
  currentColorBox.style.backgroundColor = 'white'
})
currentColorBox.addEventListener('click', function() {
    color = 'black'
    currentColorBox.style.backgroundColor = 'black'
})

let squares = document.querySelectorAll('.square');
let clearButton = document.getElementById('clear')

for(let i = 0; i < squares.length; i++) {
  // If user mouses over square && mouse is pressed down
  squares[i].addEventListener("mouseover", function() {
    if(!draw) return;
    squares[i].style.backgroundColor = color;
  });
  // If user clicks on a square
  squares[i].addEventListener("click", function() {
    squares[i].style.backgroundColor = color;
  });
  clearButton.addEventListener('click', function(){
      squares[i].style.backgroundColor = 'white'
  });
}


// If the user is holding there mouse down, draw is true
window.addEventListener('mousedown', function() { draw = true; });
// When the user lets up on the mouse button draw is set back to false
window.addEventListener('mouseup', function() { draw = false; });