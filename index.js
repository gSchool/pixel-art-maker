// ( function (){
//   'use strict';
//   const createCanvas = function(){
//     //i am naming/selecting/creating my document.querySelector ID name to be "canvas"
//     const canvas = document.querySelector('#canvas');
//
//     for (var i = 0; i < 4; i++) {
//       const square = document.createElement('div')
//       canvas.appendChild(square);
//     }
//   }
// })


var body = document.getElementsByTagName('body')[0]
var wrapper = document.createElement('section');
body.appendChild(wrapper);


for (var i = 0; i < 20; i++) {
  var row = document.createElement('div')
  wrapper.appendChild(row);
  // row.style.float = "left"

  for (var j = 0; j < 10; j++) {
    var square = document.createElement('div')
    row.appendChild(square);
    square.style.height = '50px';
    square.style.width = '50px';
    square.style.border = '1px solid black';
    square.style.float ="left";
    square.addEventListener('click', function(){
      this.style.backgroundColor = 'pink';
    })
  }
}

var palette = document.createElement('section');
body.appendChild(palette);
palette.style.clear = "both" // clearing the float for the whole palette.

//creating an array of the hufflepuff color palette

var hufflepuffColors = ['#ecb939', '#f0c75e', '#726255', '#372e29', '#000000'];
var currentColor = '#ecb939';

function getColor(pickEventColor){ // when i call this function, set the current color (hufflepuffColors) to be equal to the background color of the target.
  currentColor = pickEventColor.target.style.backgroundColor;

}
for (var i = 0; i < 5; i++) {
var paletteSquare = document.createElement('div')
document.getElementsByTagName('section')[1].appendChild(paletteSquare);
paletteSquare.style.height = '100px';
paletteSquare.style.width = '100px';
paletteSquare.style.border = '1px solid black';
paletteSquare.style.float="left";
paletteSquare.style.backgroundColor=hufflepuffColors[i];

paletteSquare.addEventListener('click', getColor); // calling the getColor function with the event listener of click on a paletteSquare.
}


//applying the color -- the parameter "event" is your "click"

function applyColor(event){
  event.target.style.backgroundColor = currentColor;

}

// our clickSquareHufflepuff is picking up whatever we select (colors) within a section (which is our wrapper)
var clickSquareHufflepuff = document.querySelector('section');

clickSquareHufflepuff.addEventListener('click', applyColor);




//find how "square" can be identified
// $('color1').on('click', function(){
//   square.mouseover(function(){
//     square.css('background-color',#ecb939)
//   })
//
// })
