'use strict';

var containerDiv = document.getElementById('containerDiv');
// var adClass = containerDiv.setAttribute('class', 'paintContainer');
var bGc = containerDiv.style.backgroundColor = "grey";
var height = containerDiv.style.height = "500px";
var width = containerDiv.style.width = "65%";
containerDiv.style.float = "left";
containerDiv.style.marginLeft = "25px";




function createRow() {

  for(var i = 0; i < 1190; i++) {
    var divC = document.createElement('div');
    divC.style.float = "left";
    divC.style.height = "2.5%";
    divC.style.width = "2.5%";
    divC.style.backgroundColor = "orange";
    divC.style.border = ".25px black solid";
    divC.addEventListener('click', colorToggle);
    containerDiv.appendChild(divC);

  }

  function colorToggle(event){
    var hasColor = false;
    if (hasColor === false) {
      //give color
      event.target.style.backgroundColor = "white";
      hasColor = true;
    } else {
      event.target.style.backgroundColor = "black";
      hasColor = false;

    }
  }

  function palette() {
    var colorPallette = document.createElement('div');
    colorPallette.setAttribute("class", "Pallette");
    var palletDiv = document.getElementsByClassName('Pallette');
    document.body.appendChild(colorPallette);
    palletDiv.style.width = '30%';
    palletDiv.style.height = '500px';
    palletDiv.style.backgroundColor = "grey";
    palletDiv. style.float = 'left';
    palletDiv.addEventListener('click', colorToggle);
    console.log(palletDiv);

     for(var i = 0; i < 8; i++) {
      var colorDiv = document.createElement('div');
      palletDiv.appendChild(colorDiv);
      colorDiv.style.width = '25px';
      colorDiv.style.height = '25px';
      colorDiv.style.backgroundColor = "red";
      colorDiv. style.float = 'left';
     }








  }
  palette();


// function colorSelect(event) {
//   var event.target.style.backgroundColor = "red";
//   var event.target.style.backgroundColor = "orange";
//   var event.target.style.backgroundColor = "yellow";
//   var event.target.style.backgroundColor = "green";
//   var event.target.style.backgroundColor = "blue";
//   var event.target.style.backgroundColor = "purple";
//   var event.target.style.backgroundColor = "white";
//   var event.target.style.backgroundColor = "black";
//
// }
// colorSelect();


}
createRow();




// In JavaScript:
// object.onclick = handler;
// object.addEventListener ("click", handler, useCapture);
// 9
// object.attachEvent ("onclick", handler);
