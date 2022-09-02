// Create a small palette of two colors (e.g. red and blue) below the canvas using more div tags.
// Add an event listener to these div tags so when clicked the brush color is saved.
// Expand the dimensions of the pixel canvas.
// Expand the palette with more colors. (i.e. red, orange, yellow, green, blue, purple, brown, gray, black, white, etc.)
// Expand the palette with a brush color indicator.
// Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior


function makePixel() {
  let body = document.getElementsByTagName('body');
  let newPixel = document.createElement('div');

  newPixel.style.width = '35%';
  newPixel.style.paddingBottom = '35%';
  newPixel.style.cssFloat = 'left';
  newPixel.style.border = '2px solid grey';
  newPixel.className = 'squarePixel'
  document.body.append(newPixel);

  newPixel.addEventListener('click', () => {
    newPixel.style.backgroundColor = 'red';
  })
}

makePixel();
makePixel();
makePixel();
makePixel();

function makePallete(color) {
  let colorOption = document.createElement('div')
  colorOption.style.width = '10%'
  colorOption.style.paddingBottom = '10%'
  colorOption.style.border = '2px solid black'
  colorOption.style.backgroundColor = color;
  colorOption.style.cssFloat = 'right'
  colorOption.className = 'color-choice'
  document.body.append(colorOption);

  colorOption.addEventListener('click', () => {

  })
}

makePallete('blue');
makePallete('orange');
makePallete('green');
makePallete('purple');
makePallete('red');
makePallete('pink');

// // test color picker
// let palleteArr = ['orange', 'blue', 'purple', 'green', 'pink', 'red'];

// function makePallete(palleteArr) {
//   let colorOption = document.createElement('div')
//   colorOption.style.width = '10%'
//   colorOption.style.paddingBottom = '10%'
//   colorOption.style.border = '2px solid black'
//   colorOption.style.backgroundColor = palleteArr;
//   colorOption.style.cssFloat = 'right'
//   colorOption.className = 'color-choice'
//   document.body.append(colorOption);

//   // let choice = colorOption.addEventListener('click', () => {

//   // })
// }