const grid = document.querySelector('.grid');
const palette = document.querySelector('.palette')
let color;
// const superPalette = document.querySelector('input');
// console.log(superPalette)

function createGrid(width, height) {
  for (let i = 0; i < height; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let x = 0; x < width; x++) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      row.appendChild(pixel);
    }
    grid.appendChild(row);
  }
}

createGrid(50, 40);


const colorsArray = ['red', 'orange', 'yellow', 'green', 'blue',
'purple', '#8B4513', 'white', 'grey', 'black'];

function createPalette(arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    const paletteColor = document.createElement('div');
    paletteColor.classList.add('paletteColor');
    paletteColor.style.backgroundColor = str;
    if (str === 'white') {
      paletteColor.style.borderBottom = '1px solid black';
    }
    palette.appendChild(paletteColor);
  }
}
createPalette(colorsArray);



function selectColor() {
  color = event.target.style.backgroundColor;
}

palette.addEventListener('click', selectColor);
// superPalette.addEventListener('click', selectColor);

function changeColorOfPixel() {
  if (color && event.target.className === 'pixel') {
    event.target.style.backgroundColor = color;
  }
}

function dragColor() {
  changeColorOfPixel();
  grid.addEventListener('mouseover', changeColorOfPixel);
}

function stopDragColor() {
  grid.removeEventListener('mouseover', changeColorOfPixel);
}

grid.addEventListener('mousedown', dragColor);
grid.addEventListener('mouseup', stopDragColor);
