// create grid; takes two arguments, both numbers are units of pixel boxes
const grid = document.querySelector('.grid');
const horizontalPixels = 30;
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

makeGrid();

let gridSize = function() {
  let dimensions = {};
  dimensions.width = horizontalPixels * 5;
  dimensions.height = verticalPixels * 5;
  console.log(dimensions);
  return dimensions;
}

grid.setAttribute("style",`width:${gridSize.width}px;`);
grid.setAttribute("style",`height:${gridSize.height}px;`);

// create palette
const colors = ["DarkRed","FireBrick","IndianRed","Red","Crimson","OrangeRed","Tomato","Coral","Salmon","MediumVioletRed","PaleVioletRed","Orchid","Plum","Fuchsia","DeepPink","HotPink","Pink","MediumOrchid","MediumPurple","Lavender","Thistle","DarkViolet","Purple","RoyalBlue","MediumSlateBlue","SlateBlue","DarkOrchid","Indigo","Navy","DarkSlateBlue","MediumBlue","Blue","DeepSkyBlue","DodgerBlue","SteelBlue","CornflowerBlue","SkyBlue","PowderBlue","Aqua","Turquoise","MediumTurquoise","DarkTurquoise","PaleTurquoise","Aquamarine","MediumSpringGreen","Teal","DarkCyan","CadetBlue","MediumAquaMarine","DarkSeaGreen","MediumSeaGreen","SeaGreen","ForestGreen","DarkOliveGreen","Olive","LimeGreen","YellowGreen","SpringGreen","PaleGreen","Chartreuse","GreenYellow","Yellow","Gold","Khaki","Moccasin","PeachPuff","GoldenRod","Orange","Darkorange","SandyBrown","DarkSalmon","BurlyWood","Chocolate","RosyBrown","Sienna","SaddleBrown","DarkSlateGray","SlateGray","Gainsboro","White","Black"];

const palette = document.querySelector('.palette');
const current = document.createElement('div');
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
      event.target.style = `background-color: ${brushColor}`;
  }

  function changeBrushColor(event) {
    brushColor = event.target.id;
    current.style.backgroundColor = brushColor;
    console.log(`brush color is ${brushColor}`);
  }

  function startPainting(event) {
    isPainting = true;
    event.target.style = `background-color: ${brushColor}`;
  }

  function painting(event) {
    if (isPainting === true) {
      event.target.style = `background-color: ${brushColor}`;
      console.log(event.target);
    }
  };

  function endPainting(event) {
    isPainting = false;
  };


  current.classList.add('current');
  palette.appendChild(current);
  createPalette();
  grid.addEventListener('click', addColor);
  grid.addEventListener('mousedown', startPainting);
  grid.addEventListener('mouseenter', painting, false);
  grid.addEventListener('mouseup', endPainting);
  palette.addEventListener('click', changeBrushColor);
