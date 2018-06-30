var color = "white"

var colorGrid = document.querySelector(".grid");

var selectedColor = document.querySelector(".currentColorSelected")

colorGrid.addEventListener("click", function(event){
  event.target.style.backgroundColor = color
})

var palette = document.querySelector(".colorPalette")

palette.addEventListener("click", function(event) {
  var clickedItem = window.getComputedStyle(event.target)
  color = clickedItem.getPropertyValue("background-color")
  selectedColor.style.backgroundColor = color
})

// All ^^ assigns color from last clicked item, applys to next
// square clicked in grid


//Below, it loops the divs so there can be more than 4 squares

for(i=4; i<16; i++) {
  var newSquares = document.createElement("div")
  newSquares.className="square"
  colorGrid.appendChild(newSquares)
}
