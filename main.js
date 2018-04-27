/////////////Objecives Complete//////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   let can = document.getElementById("canvas")
//   let pixel = document.getElementById("canvas").querySelectorAll(".pixel")
//   can.addEventListener("click", function() {
//     let elem = event.target
//     elem.classList.add("red")
//   })
// })
// 1. Create a small, 2x2 grid canvas made up of white, square `div` tags with a border.
// 1. Add an event listener to each `div` so when clicked the background turns red.
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////







document.addEventListener('DOMContentLoaded', function() {
  ////////////////Populate Canvas///////////////////////
  let canvas = document.getElementById("row")
  for (let i =0; i<3388 ; i++){
    let pixel = document.createElement("div")
    pixel.classList.add("pixel")
    row.appendChild(pixel)
  }
  console.log("here is canvas", canvas)
  //event listener and elements/////
  let color = document.createElement("div")
  // let pixel = document.getElementById("canvas").querySelectorAll(".pixel")
  let button = document.getElementsByTagName("button")

  //will need the eventListener on button to store
  let newColor = function() {
      let elem = event.target.id
      if (!color.hasAttribute(elem)) {
        color.setAttribute("id", elem)
    }
  }
  ///Will need event listener on canvas color to use on
  let pixelColor = function() {
    if (event.target !== canvas)
    event.target.setAttribute("id", color.id)
  }
  ///////////////EVENTS!!!!!!!!!!!///////////
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", newColor)
    // console.log(button)
  }
  canvas.addEventListener("click", pixelColor)
})
//  1. Start with a blank canvas of pixels.
// 1. Select a brush color from a palette of colors.
// 1. Paint the pixels on the canvas using the brush color.
// 1. Repeat step 2.
//
// Here's a development workflow that we recommend you use.
//
// 1. Create a small palette of two colors (e.g. red and blue) below the canvas using more `div` tags.
// 1. Add an event listener to these `div` tags so when clicked the brush color is saved.
// 1. Expand the dimensions of the pixel canvas.
// 1. Expand the palette with more colors. (i.e. red, orange, yellow, green, blue, purple, brown, gray, black, white, etc.)
// 1. Expand the palette with a brush color indicator.
// 1. Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!
//
// **TIP:** Check out [this handy tool](http://www.colors.commutercreative.com/grid/) to see a list of all the named colors in CSS.
//
// ### Bonus 1
//
// Improve the mouse so it behaves like a real paintbrush. In other words, allow the user to paint by clicking and dragging across the canvas. For this, you'll need a combination of the `mousedown`, `mouseenter`, and `mouseup` events.
//
// **TIP:** The [`mouseenter` event](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter) doesn't bubble up the DOM tree.
//
// ### Bonus 2
//
// Add a color picker which allows the user to select any brush color using the [`<input type="color">` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) and the [`change` event](https://developer.mozilla.org/en-US/docs/Web/Events/change).
//
// ### Bonus 3
//
// Research [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) and make a way to Save and Load a drawing.  Research [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) as a way to put the drawing into LocalStorage.
//
// ### Bonus 4
//
// Create a fill tool that will [flood fill](https://en.wikipedia.org/wiki/Flood_fill) boundaries with a chosen paint color.
