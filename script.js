


//creates the pixel boxes and assigns class attribute
var pixelBox = document.createElement('div');
pixelBox.setAttribute('class', 'pixelBox');

//populates the board and styles pixelBoxes
var containerDiv = document.querySelector('#container')
var numberOfBoxes = 0;
while (numberOfBoxes < 2100) { //row is 84 pixels long
  var pixelBoxClone = pixelBox.cloneNode(true);
  pixelBoxClone.style.float = "left";
  pixelBoxClone.style.backgroundColor = "white";
  pixelBoxClone.style.border = "1px solid lightgray";
  pixelBoxClone.style.width = "10px";
  pixelBoxClone.style.height = "10px";
  //add event listener
  pixelBoxClone.addEventListener('click', addColor);
  containerDiv.appendChild(pixelBoxClone);
  numberOfBoxes +=1;
}

//this function handles filling pixel box with color when clicked


//creates the palette of colors below the grid
var paletteCircle = document.createElement('div');
paletteCircle.setAttribute('class', 'paletteCircle');

var palette = document.querySelector('#palette')
var numberOfColors = 0;
while (numberOfColors < 26) {
  var paletteCircleClone = paletteCircle.cloneNode(true);
  paletteCircleClone.addEventListener('click', setCurrentColor);
  palette.appendChild(paletteCircleClone);
  numberOfColors +=1;
}



// Add an event listener to these `div` tags so when clicked tiggers setCurrentColor().
  //--> onClick, this.color is stored in a variable and displayed in a new div
  var currentColor = "red";
  function setCurrentColor() {
    console.log("paletteCircleClone was clicked");
    currentColor = this.style.backgroundColor;
  }

  function addColor() {
      //changes the background color
      console.log("pixel box was clicked");
      this.style.backgroundColor = currentColor;
  }


  function colorAssignment() {
    var colorCircles = document.getElementsByClassName('paletteCircle');
    var theColors = ["lightgreen", "seagreen", "darkgreen", "darkseagreen", "violet", "orchid", "magenta", "darkmagenta", "aqua", "skyblue", "royalblue", "blue", "navy", "yellow", "gold", "tan", "orange", "salmon", "lightsalmon", "firebrick", "crimson", "maroon", "lightgray", "gray", "darkgray", "black"];
    //nested for loops; assign colors to colorCircles from theColors array
    for (var i = 0; i <colorCircles.length; i++) {
      for (var j = 0; j < theColors.length; j++) {
        colorCircles[i].style.backgroundColor = theColors[i];
      }
    }
  }
  colorAssignment();


























// Expand the dimensions of the pixel canvas.
// Expand the palette with the rest of the standard colors as well as an eraser. (i.e. red, orange, yellow, green, blue, purple, brown, gray, black, white, etc.)
// Expand the palette with a current color indicator so the user knows which color was last selected.
// Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!
