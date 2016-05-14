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
    divC.style.display = "border-box";
    divC.setAttribute("class", "paint");
    containerDiv.appendChild(divC);

  }

  function colorToggle(event){
    document.getElementsByClassName("paint");
    var hasColor = true;
    if (document.getElementsByClassName("paint") === true && hasColor === false) {
      //give color
      event.target.style.backgroundColor = "white";
      var hasColor = true;
    } else {
      event.target.style.backgroundColor = "black";
      hasColor = false;

    }
  }

  function palette() {
    var colorPallette = document.createElement('div');
    var classPallet = colorPallette.setAttribute("class", 'Pallette');
    //var palletDiv = document.getElementsByClassName("classPallet");
    document.body.appendChild(colorPallette);


     for(var i = 0; i < 8; i++) {
      var colorDiv = document.createElement('div');
      colorPallette.appendChild(colorDiv);
      colorDiv.style.width = '100%';
      colorDiv.style.height = '25px';
      colorDiv.style.backgroundColor = "red";
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
