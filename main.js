document.addEventListener("DOMContentLoaded", function() {

  const pixelDim = 100;
  let windowWidth = $(document).width();
  let windowHeight = $(document).height();
  let maxCanvasWidth = windowWidth;
  let maxCanvasHeight = windowHeight;
  let pixelsWide = Math.floor((maxCanvasWidth-300)/(pixelDim-1));
  let pixelsHigh = Math.floor((maxCanvasHeight-460)/(pixelDim-1));

  function saveImage() {
    let canvasArray = [];
    let pixelRows = document.getElementsByTagName('pixelRow');
    for (let pixelRow of pixelRows) {
      let row = [];
      for (i = 0; i < pixelRow.children.length; i++) {
        row.push(pixelRow.children[i].style.backgroundColor);
      }
      canvasArray.push(row);
    }
    let jsonString = JSON.stringify(canvasArray);
    window.localStorage.setItem('pixelArt',jsonString);
  }

  function loadImage() {
    let canvasArray = JSON.parse(window.localStorage.getItem('pixelArt'));

    let pixelRows = document.getElementsByTagName('pixelRow');
    for (i = 0; i < pixelRows.length; i++) {  // limit to current canvas rows
      if (i<canvasArray.length) { // limit to saved canvas rows
        let storedRow = canvasArray[i];
        for (j = 0; j < pixelRows[i].children.length; j++) { // limit to current canvas cells
          if (j<storedRow.length) { // limit to saved canvas cells
            let savedPixel = storedRow[j];
            pixelRows[i].children[j].style.backgroundColor = savedPixel;
          }
        }
      }
    }
  }

  let saveButton = document.getElementsByTagName('saveButton')[0];
  saveButton.addEventListener("click",saveImage);

  let loadButton = document.getElementsByTagName('loadButton')[0];
  loadButton.addEventListener("click",loadImage);


  function chooseFromPicker () {
    pickerColor = colorPicker.value;
  }

  let colorPicker = document.getElementsByTagName('input')[0];

  colorPicker.addEventListener("change",chooseFromPicker);

  let canvasWidth = pixelsWide * (pixelDim) - pixelsWide + 45;
  let canvas = document.getElementsByTagName('pixelCanvas')[0];
  canvas.setAttribute("style", "width:"+canvasWidth);

  let mouseDown = false;
  let pickerColor = '#fbfcfc';
  colorPicker.value = pickerColor;
  let color = 'color'+pickerColor;

  function buildCanvas() {
    for (let i=0;i<pixelsHigh;i++) {
      let row = document.createElement('pixelRow');
      for (let j = 0; j<pixelsWide; j++) {
        let pixel = document.createElement('pixel');
        row.appendChild(pixel);
      }
      canvas.appendChild(row);
    }
  }

  let paint = function() {
    if (mouseDown) {
      if (pickerColor == color.substring(5)) {
        event.target.className = color;
      } else {
        event.target.style.backgroundColor = pickerColor;
      }
    }
  }

  function setPixelEvents () {
    let pixels = document.getElementsByTagName('pixel');
    for (let i=0;i<pixels.length;i++) {
      pixels[i].addEventListener("mouseenter",paint);
      pixels[i].setAttribute("style", "width:"+pixelDim+";height:"+pixelDim);
    }
  }

  function select () {
    color = event.target.className;
    pickerColor = '#'+color.substring(5);
    colorPicker.value = pickerColor;
    event.target.className = color;
  }

  function setPaletteEvents () {
    let colors = document.getElementsByTagName('colorTile');
    for (let i=0;i<colors.length;i++) {
      colors[i].addEventListener("click",select);
    }
  }

  function mouseClicked () {
    mouseDown = true;
  }
  function mouseReleased () {
    mouseDown = false;
  }

  window.addEventListener("mouseup",mouseReleased);
  window.addEventListener("mousedown",mouseClicked);

  buildCanvas();
  setPixelEvents();
  setPaletteEvents();

});
