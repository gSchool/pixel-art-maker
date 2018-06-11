const gridTemplate = require('./gridTemplate')

let colorChoice = 'red'

// expand the grid
let gridSize = 240
const container = document.querySelector('.container');
for(let i=0; i < gridSize; i++){
  let divCreate = document.createElement("div");
  container.innerHTML += gridTemplate();
}


//grab the div to change its color
let pixels = Array.from(document.querySelectorAll('.pixel'));
pixels.forEach(el => {
  let colored = false
  const clicked = (event) => {
    if(colored){
      el.style.background = 'white'
      colored = !colored
    }
    else {
      el.style.background = colorChoice
      colored = !colored
    }
  }
  el.addEventListener('click', clicked)
})

//color selections
let palletteItems = Array.from(document.querySelectorAll('.color'));
palletteItems.forEach(palletteItem => {
  const clicked = (event) => {
    colorChoice = window.getComputedStyle(palletteItem, null).getPropertyValue("background-color")
  }
  palletteItem.addEventListener('click', clicked)
})


/////////////////////////////////
// let clicked = false;
//
// let pixel = document.querySelectorAll('.pixel');
// for (let i = 0; i < pixel.length; i++) {
//   let canvasUnit = pixel[i]
//   var brush = canvasUnit.addEventListener('mouseenter', function(e) {
//     if (clicked === true) {
//       e.target.style.background = colorChoice
//     }
//   })
//
//   canvasUnit.addEventListener('mousedown', function(e) {
//     if (clicked === false) {
//       clicked = true;
//     }
//   })
//   canvasUnit.addEventListener('mouseup', function(e) {
//     if (clicked === true) {
//       clicked = false;
//     }
//   })
// }
//
// let colorChoice = 'white'
// let palletteItems = document.querySelectorAll('.color');
// for (let j = 0; j < palletteItems.length; j++) {
//   let palletteItem = palletteItems[j]
//   palletteItem.addEventListener('click', function(e) {
//     colorChoice = palletteItem.textContent.trim();
//   })
// }
