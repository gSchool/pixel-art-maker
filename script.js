'use strict';

var containerDiv = document.getElementById('containerDiv');
// var adClass = containerDiv.setAttribute('class', 'paintContainer');
var bGc = containerDiv.style.backgroundColor = "grey";
var height = containerDiv.style.height = "500px";
var width = containerDiv.style.width = "65%";
containerDiv.style.float = "left";
containerDiv.style.marginLeft = "25px";




function createRow() {
var hasColor;
  for(var i = 0; i < 1190; i++) {
    var divC = document.createElement('div');
    divC.style.float = "left";
    divC.style.height = "2.5%";
    divC.style.width = "2.5%";
    divC.style.backgroundColor = "orange";
    divC.style.border = ".25px black solid";
    divC.addEventListener('click', selectColor);
    divC.style.display = "border-box";
    divC.setAttribute("id", "paint");
    containerDiv.appendChild(divC);
  }
var b;
  function colorToggle(event){
    var painter = document.getElementById("paint");
    b = event.target.style.backgroundColor;
    //var attribute = b.style.backgroundColor;
      // if (painter) {
        event.target.style.backgroundColor = b;

      //}
  }

  function palette() {
    var colorPallette = document.createElement('aside');
    var classPallet = colorPallette.setAttribute("class", 'Pallette');
    //var palletDiv = document.getElementsByClassName("classPallet");
    document.body.appendChild(colorPallette);

     var paletteArray = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Black", "White"];
     for(var i = 0; i < paletteArray.length; i++) {
      var colorDiv = document.createElement('button');
      colorPallette.appendChild(colorDiv);
      colorDiv.setAttribute('Id', [i]);
      colorDiv.style.width = '100%';
      colorDiv.style.height = '25px';
      colorDiv.style.backgroundColor = paletteArray[i];
      //colorDiv. style.float = 'left';
     }
     colorPallette.style.width = '30%';
     colorPallette.style.height = '500px';
     colorPallette.style.backgroundColor = "grey";
     colorPallette. style.float = 'right';
     colorPallette.addEventListener('click', colorToggle);
     //console.log(palletDiv);
  }
  palette();

  function selectColor(event) {

    event.target.style.backgroundColor = b;
  }


}
createRow();




// In JavaScript:
// object.onclick = handler;
// object.addEventListener ("click", handler, useCapture);
// 9
// object.attachEvent ("onclick", handler);
