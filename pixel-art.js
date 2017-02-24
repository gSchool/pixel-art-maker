var color = "white"

var colorGrid = document.querySelector(".grid");

colorGrid.addEventListener("click", function(event){
  event.target.style.backgroundColor = color
})

var palette = document.querySelector(".colorPalette")

palette.addEventListener("click", function(event) {
  var clickedItem = window.getComputedStyle(event.target)
  color = clickedItem.getPropertyValue("background-color")
})

// All ^^ assigns color from last clicked item, applys to next
// square clicked in grid


// Below I am making a for loop to create more squares in the grid

// for(i=4; i<16; i++) {
//   var newSquares = document.createElement("div")
// }
