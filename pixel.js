"use strict";

window.onload = function() {
  document.getElementsByTagName("html")[0].style.height = "100%";
  // document.getElementsByTagName("html")[0].style.width = "100%";
  document.body.style.height = "100%";
  // document.body.style.width = "100%";
  // document.body.style.margin = "0";
  // document.body.style = "align: center";
var currentColor;
  var selectableColor = document.getElementById("aColor").children;
  // console.log(selectableColor);

    for (var i = 0; i < selectableColor.length; i++) {
          selectableColor[i].addEventListener("click", function(ev) {
              var thisThingOverHere = getComputedStyle(ev.target)
              console.log(ev.target);
              currentColor = thisThingOverHere.backgroundColor
               console.log(currentColor);

           });
    }


  var board = document.createElement("div");
  document.body.append(board);
  board.style.height = "500px";
  board.style.width = "500px"; // all elements by default have width of auto 100
  board.style.backgroundColor = "lightgrey";
  board.style.margin = "15%";
  board.style.padding = "15px";
  board.style.borderRadius = "30px";


  var square;

  for (var i = 0; i < 754; i++) {
    square = document.createElement("div");
    square.setAttribute('class', 'colorSquare')
    square.addEventListener("click", function(ev) {
        ev.target.style.backgroundColor = currentColor;
    })
    square.style.height = "3%";
    square.style.width = "3%";
    square.style.float = "left";
    board.append(square);
    square.style.border = ".25px solid darkgrey";
    square.style.backgroundColor = "white";

    // square.addEventListener("click", function() {
    //   square.style.backgroundColor = "white";
    // });
  };




};
