console.log("start js");

const swatchContainer = document.querySelector(".swatchContainer");
const canvasContainer = document.querySelector(".canvasContainer");

var paletteSelectedSwatch = document.querySelector(".paletteSwatch, .paletteSwatchColor1");
console.log(paletteSelectedSwatch)

paletteSelectedSwatch.classList.add("paletteSelectedSwatchStyle");

//build the pixel grid
var rows=32;
var cols=48;

for(var i=0; i<rows; i++) {
  var elmPixelRow = document.createElement("div");
  elmPixelRow.classList.add("pixelRow");
  for(var j=0; j<cols; j++) {
    var elmPixel = document.createElement("div");
    elmPixel.classList.add("pixel");
    elmPixelRow.appendChild(elmPixel);
  }
  canvasContainer.appendChild(elmPixelRow);
}

function cbPaletteContainer(event) {
  if(event.target != swatchContainer) {
    paletteSelectedSwatch.classList.remove("paletteSelectedSwatchStyle");
    paletteSelectedSwatch = event.target;
    paletteSelectedSwatch.classList.add("paletteSelectedSwatchStyle");
  }
}

function cbCanvasContainer(event) {
  const color = window.getComputedStyle(paletteSelectedSwatch, null)
                      .getPropertyValue("background-color")
  event.target.style.backgroundColor = color;
}

function cbCanvasContainerMouseDown(event) {
  if(event.which==1) {
    const color = window.getComputedStyle(paletteSelectedSwatch, null)
                        .getPropertyValue("background-color")
    event.target.style.backgroundColor = color;
  }
}

swatchContainer.addEventListener("click", cbPaletteContainer);
canvasContainer.addEventListener("click", cbCanvasContainer);
canvasContainer.addEventListener("mousemove", cbCanvasContainerMouseDown);
