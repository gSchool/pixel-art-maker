let pixels = document.getElementsByClassName("pixel");
let colorDot = document.getElementsByClassName("color_dot");

let chosenColor = ""

// flex-box details
let flexBox = document.querySelector("#flex_box");
let boxSize = {x: 25, y: 25};

let flexRow = document.createElement("div");
flexRow.setAttribute("class","flex_row");

let madeRow = document.getElementById("#flex_row")

console.log(flexRow)
console.log(flexBox);


let pixel = document.createElement("div");
pixel.setAttribute("class","pixel");
console.log(pixel)

// sets the flex-box size
for (let i = 0; i < boxSize.y; i++) {
  flexBox.appendChild(flexRow);
  console.log("hey");
  for (let j = 0; j < boxSize.x; j++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("class","pixel");
    flexRow.appendChild(pixel);
    console.log("wha");
  }
}


// adds event listener to the pixels
for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener("click", paint);
}
// adds event listener to the color pickers
for (let i = 0; i < pixels.length; i++) {
  colorDot[i].addEventListener("click", colorChoice);
}

// keeps a record of the color chosen
function colorChoice(event){
  chosenColor = event.target.id;
  // console.log(chosenColor);
}

// paints the pixel
function paint(event){
  event.target.style.backgroundColor = chosenColor;
}
