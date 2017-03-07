document.addEventListener("DOMContentLoaded", function() {

  const pixelDim = 10;
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

  function resetImage() {
    let pixels = document.getElementsByTagName('pixel');
    for (let pixel of pixels) {
      pixel.style.backgroundColor = '#ffffff';
    }
  }

  let saveButton = document.getElementsByTagName('saveButton')[0];
  saveButton.addEventListener("click",saveImage);

  let loadButton = document.getElementsByTagName('loadButton')[0];
  loadButton.addEventListener("click",loadImage);

  let resetButton = document.getElementsByTagName('resetButton')[0];
  resetButton.addEventListener("click",resetImage);


  function chooseFromPicker () {
    pickerColor = colorPicker.value;
  }

  let colorPicker = document.getElementsByTagName('input')[0];

  colorPicker.addEventListener("change",chooseFromPicker);

  let canvasWidth = pixelsWide * (pixelDim) - pixelsWide + 45;
  let canvas = document.getElementsByTagName('pixelCanvas')[0];
  canvas.setAttribute("style", "width:"+canvasWidth);

  let mouseDown = false;
  let pickerColor = '#17202a';
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

  let paintWhileDown = function() {
    if (mouseDown) {
      paint();
    }
  }

  let paint = function() {
      if ($('input[type="checkbox"]').prop("checked") == true) { // check if flood is checked
        floodFill(event.target, pickerColor);
      } else { // paint normally
        event.target.style.backgroundColor = pickerColor;
      }
  }

  function setPixelEvents () {
    let pixels = document.getElementsByTagName('pixel');
    for (let i=0;i<pixels.length;i++) {
      pixels[i].addEventListener("mouseenter",paintWhileDown);
      pixels[i].addEventListener("click",paint);
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

  function floodFill(node, floodColor) {
    let floodArray = []
    let originalColor = node.style.backgroundColor;

    let parsedRGB = 'rgb(';
    parsedRGB += parseInt(floodColor.substring(1, 3), 16) + ', ';
    parsedRGB += parseInt(floodColor.substring(3, 5), 16) + ', ';
    parsedRGB += parseInt(floodColor.substring(5, 7), 16) + ')';

    if (originalColor != parsedRGB) {
      let canvasAsObj = {};
      let pixelRows = document.getElementsByTagName('pixelRow');
      for (let i=0; i<pixelRows.length; i++) {
        let row = pixelRows[i];
        for (j = 0; j < row.children.length; j++) {
          pixelObj = {"row":i,"col":j,"node":row.children[j]};
          canvasAsObj[[i,j]] = pixelObj; // add each pixelObj to canvasAsObj with the row/column as key
          if (row.children[j] == node) {
            floodArray.push([i,j]); // add the target pixel to the flood queue
          }
        }
      }

      while (floodArray.length > 0) {
        let curCoord = floodArray.pop();
        let curNode = canvasAsObj[curCoord];
        if (curNode != undefined) {
          curNode.node.style.backgroundColor = floodColor; //change color

          //check left
          let pixelObj = canvasAsObj[[curCoord[0],curCoord[1]-1]];
          if (pixelObj != null) {
            if (pixelObj.node.style.backgroundColor == originalColor) { // add to flood queue
              floodArray.push([curCoord[0],curCoord[1]-1]);
            }
          }

          //check right
          pixelObj = canvasAsObj[[curCoord[0],curCoord[1]+1]];
          if (pixelObj != null) {
            if (pixelObj.node.style.backgroundColor == originalColor) { // add to flood queue
              floodArray.push([curCoord[0],curCoord[1]+1]);
            }
          }

          //check up
          pixelObj = canvasAsObj[[curCoord[0]-1,curCoord[1]]];
          if (pixelObj != null) {
            if (pixelObj.node.style.backgroundColor == originalColor) { // add to flood queue
              floodArray.push([curCoord[0]-1,curCoord[1]]);
            }
          }

          //check down
          pixelObj = canvasAsObj[[curCoord[0]+1,curCoord[1]]];
          if (pixelObj != null) {
            if (pixelObj.node.style.backgroundColor == originalColor) { // add to flood queue
              floodArray.push([curCoord[0]+1,curCoord[1]]);
            }
          }
        }
      }
    } 
  }




  buildCanvas();
  setPixelEvents();
  setPaletteEvents();

});
