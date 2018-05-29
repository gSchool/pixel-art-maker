(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function gridTemplate(){
  return `
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  <div class="pixel"></div>
  `
}

module.exports = gridTemplate;

},{}],2:[function(require,module,exports){
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
//
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

},{"./gridTemplate":1}]},{},[2]);
