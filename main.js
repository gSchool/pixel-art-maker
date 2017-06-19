// variables
let saveArr = [];
let chosenColor = ""
let boxSize = {x: 30, y: 30};
let flexBox = document.querySelector("#flex_box");
let colors = ["red", "blue", "green", "yellow", "white"]
let palette = document.querySelector(".palette");
let saveButton = document.querySelector("#save");
let loadButton = document.querySelector("#load");
let clearButton = document.querySelector("#clear");
let colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.id = "color_picker"
colorPicker.value = "#269acb";

// event listeners
flexBox.addEventListener("click", paint);
palette.addEventListener("click", colorChoice);
colorPicker.addEventListener("change", chooser);
saveButton.addEventListener("click", save);
loadButton.addEventListener("click", load);
clearButton.addEventListener("click", clear);

// builds the pixel paint box, depending on the boxSize data
// rows
function boxBuilder() {
  for (let i = 0; i < boxSize.y; i++) {
    let flexRow = document.createElement("div");
    flexRow.setAttribute("class","flex_row");
    // fill the rows & append
    for (let j = 0; j < boxSize.x; j++) {
      let pixel = document.createElement("div");
      pixel.setAttribute("class","pixel");
      pixel.id = i + "_" + j;
      pixel.addEventListener("mouseover", brushFx);
      pixel.addEventListener("mouseleave", fixTheBrush)
      flexRow.appendChild(pixel);
    }
    flexBox.appendChild(flexRow);
  }
}

// creates the palette
palette.appendChild(colorPicker);
for (let k = 0; k < colors.length; k++ ){
  let colorDot = document.createElement("div");
  colorDot.setAttribute("class", "color_dot");
  let color = colors[k];
  colorDot.style.backgroundColor = colors[k];
  colorDot.id = colors[k];
  palette.appendChild(colorDot);
}

// keeps a record of the color chosen
function colorChoice(event){
  chosenColor = event.target.id;
}

// paints the pixel
function paint(event){
  event.target.style.backgroundColor = chosenColor;
}

// acts like a brush
function brushFx(event){
  if (event.buttons){
    event.target.style.backgroundColor = chosenColor;
  }
}

// this fixes the fact that brush effect didn't color the initial pixel when
// the mouse was clicked and held
function fixTheBrush(event){
  if (event.buttons) {
    event.target.style.backgroundColor = chosenColor;
  }
}

// color chooser function
function chooser(event) {
  chosenColor = event.target.value;
  colorPicker.style.backgroundColor = chosenColor;
}

// save & load section
function save(event) {
  let rows = flexBox.children;
  for (const row of rows){
    let rowArr = [];
    let columns = row.children;
    for (const column of columns){
      let tempColor = column.style.backgroundColor;
      if (tempColor) {
        rowArr.push(tempColor)
      }
      if (!tempColor){
        rowArr.push("white")
      }
    }
    saveArr.push(rowArr);
  }
localStorage.clear("saveToLoad");
localStorage.setItem("saveToLoad", JSON.stringify(saveArr));
}

function load(event) {
  let savedPixels = JSON.parse(localStorage.getItem("saveToLoad"));
  for (let l = 0; l < savedPixels.length; l++) {
    let savedColorRow = savedPixels[l];

    for (let m = 0; m < savedColorRow.length; m++) {
      let oldPixel = flexBox.children[l].children[m];
      let savedColor = savedColorRow[m];
      oldPixel.style.backgroundColor = savedColor;
    }
  }
}

function clear(event) {
  flexBox.innerHTML = ""
  boxBuilder();
}

boxBuilder();
