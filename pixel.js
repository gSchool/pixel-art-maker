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

  var container = document.getElementById("container");
  var board = document.createElement("div");
  container.prepend(board);
  board.style.overflow = "auto";



  var square;

  for (var i = 0; i < 754; i++) {
    square = document.createElement("div");
    square.setAttribute('class', 'colorSquare')
    square.addEventListener("click", function(ev) {
        ev.target.style.backgroundColor = currentColor;
    })
    square.style.height = "15px";
    square.style.width = "15px";
    square.style.float = "left";
    board.append(square);
    square.style.border = ".25px solid darkgrey";
    square.style.backgroundColor = "white";

    // square.addEventListener("click", function() {
    //   square.style.backgroundColor = "white";
    // });
  };




};
