// Strict mode
'use strict';

// Grid container element
const screen = document.querySelector('#screen');

// Controls element
const controls = document.getElementById('controls');

// Empty array to hold grid squares
const grid = [];

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
});
let greenButton = document.getElementById('green');
greenButton.addEventListener('click', function() {
  color = greenButton.id;
});
let blueButton = document.getElementById('blue');
blueButton.addEventListener('click', function() {
  color = blueButton.id;
});

let squares = document.querySelectorAll('.square');

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
}

// If the user is holding there mouse down, draw is true
window.addEventListener('mousedown', function() { draw = true; });
// When the user lets up on the mouse button draw is set back to false
window.addEventListener('mouseup', function() { draw = false; });