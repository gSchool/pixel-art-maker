console.log("yo!")
'use strict'

let clicked = false;

let pixel = document.querySelectorAll('.pixel');
for(let i = 0; i < pixel.length;i++){
  let canvasUnit = pixel[i]
  var brush = canvasUnit.addEventListener('mouseenter', function(e){
      if(clicked === true){
        e.target.style.background = colorChoice
      }
    })

  canvasUnit.addEventListener('mousedown', function(e){
      if(clicked === false){
        clicked = true;
      }
    })
    canvasUnit.addEventListener('mouseup', function(e){
        if(clicked === true){
          clicked = false;
        }
      })
  }

let colorChoice = 'white'
let palletteItems = document.querySelectorAll('.color');
for(let j = 0; j < palletteItems.length; j++){
  let palletteItem = palletteItems[j]
  palletteItem.addEventListener('click', function(e){
    colorChoice = palletteItem.textContent.trim();
  })
}
