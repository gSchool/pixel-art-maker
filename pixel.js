// create grid; takes two arguments, both numbers are units of pixel boxes
const grid = document.querySelector('.grid');
const horizontalPixels = 40;
const verticalPixels = 60;

function makeGrid() {
  for (let i = 0; i < verticalPixels; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

      for (let j = 0; j < horizontalPixels; j++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
      }
    grid.appendChild(row);
  }
 }

 function clearGrid() {
   grid.innerHTML = "";
   makeGrid();
 }



makeGrid();

let gridSize = function() {
  let dimensions = {};
  dimensions.width = horizontalPixels * 5;
  dimensions.height = verticalPixels * 5;
  return dimensions;
}

grid.setAttribute("style",`width:${gridSize.width}px;`);
grid.setAttribute("style",`height:${gridSize.height}px;`);

// create palette
const colors = ["DarkRed","FireBrick","IndianRed","Red","Crimson","OrangeRed","Tomato","Coral","Salmon","MediumVioletRed","PaleVioletRed","Orchid","Plum","Fuchsia","DeepPink","HotPink","Pink","MediumOrchid","MediumPurple","Lavender","Thistle","Purple","DarkOrchid","MediumSlateBlue","SlateBlue","Indigo","Navy","RoyalBlue","Blue","DeepSkyBlue","CornflowerBlue","SkyBlue","PowderBlue","Aqua","Turquoise","DarkTurquoise","PaleTurquoise","Aquamarine","MediumAquaMarine","Teal","DarkCyan","CadetBlue","DarkSeaGreen","MediumSeaGreen","SeaGreen","ForestGreen","DarkOliveGreen","Olive","YellowGreen","LimeGreen","MediumSpringGreen","SpringGreen","Chartreuse","PaleGreen","GreenYellow","Yellow","Gold","Moccasin","GoldenRod","Orange","Darkorange","DarkSalmon","BurlyWood","RosyBrown","Chocolate","Sienna","SaddleBrown","DarkSlateGray","SlateGray","Gainsboro","White","Black"];

const palette = document.querySelector('.palette');
const current = document.createElement('div');
const clearButton = document.querySelector('button');
let brushColor = current.style.backgroundColor;
let isPainting = false;



function createPalette() {
  for (let i = 0; i < colors.length; i++) {
    const color = document.createElement('div');
    color.classList.add('color');
    color.id = colors[i];
    color.style.backgroundColor = colors[i];
    palette.appendChild(color);
  }
}

// change color of pixels on canvas
function addColor(event) {
    if (event.target.classList.contains('pixel')) {
      event.target.style = `background-color: ${brushColor}`;
    }
}

function changeBrushColor(event) {
  brushColor = event.target.id;
  current.style.backgroundColor = brushColor;
}

function painting(event) {
  if (event.target.classList.contains('pixel')) {
    if (event.buttons) {
      event.target.style = `background-color: ${brushColor}`;
    }
  }
}

current.classList.add('current');
palette.appendChild(current);
createPalette();
palette.appendChild(clearButton);
grid.addEventListener('click', addColor);
grid.addEventListener('mouseover', painting);
palette.addEventListener('click', changeBrushColor);
clearButton.addEventListener('click', clearGrid);
