let chosenColor = ""

// flex-box details
let boxSize = {x: 30, y: 30};
let flexBox = document.querySelector("#flex_box");
flexBox.addEventListener("click", paint);
let pixel = document.createElement("div");
pixel.setAttribute("class","pixel");

// palette details
let colors = ["red", "blue", "green", "yellow", "white"]
let palette = document.querySelector(".palette");
palette.addEventListener("click", colorChoice);

// sets the flex-box size
for (let i = 0; i < boxSize.y; i++) {
  let flexRow = document.createElement("div");
  flexRow.setAttribute("class","flex_row");
  flexBox.appendChild(flexRow);

  for (let j = 0; j < boxSize.x; j++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("class","pixel");
    flexRow.appendChild(pixel);
  }
}

for (let k = 0; k < colors.length; k++ ){
  let colorDot = document.createElement("div");
  colorDot.setAttribute("class", "color_dot")
  let color = colors[k];
  colorDot.style.backgroundColor = colors[k];
  colorDot.id = colors[k];
  palette.appendChild(colorDot);
}





// adds event listener to the pixels
// for (let i = 0; i < pixels.length; i++) {
//   pixels[i].addEventListener("click", paint);
// }
// adds event listener to the color pickers
// for (let i = 0; i < pixels.length; i++) {
//   colorDot[i].addEventListener("click", colorChoice);
// }

// keeps a record of the color chosen
function colorChoice(event){
  chosenColor = event.target.id;
  console.log(chosenColor);
}

// paints the pixel
function paint(event){
  event.target.style.backgroundColor = chosenColor;
  console.log(event);
}
