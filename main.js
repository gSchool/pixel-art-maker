console.log("yo!")
'use strict'

function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i=0, iLen=events.length; i<iLen; i++) {
    element.addEventListener(events[i], listener, false);
  }
}

addListenerMulti(window, 'mousemove touchmove', function(){…});

function brushWork(){
  this.target.style.background = colorchoice
}

let pixel = document.querySelectorAll('.pixel');
for(let i = 0; i < pixel.length;i++){
  let canvasUnit = pixel[i]
  canvasUnit.addEventListener('click', function(e){
        e.target.style.background = colorChoice
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
