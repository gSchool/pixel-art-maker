"use strict";

window.onload = function() {
  document.getElementsByTagName("html")[0].style.height = "100%";
  // document.getElementsByTagName("html")[0].style.width = "100%";
  document.body.style.height = "100%";
  // document.body.style.width = "100%";
  // document.body.style.margin = "0";
  // document.body.style = "align: center";

  var board = document.createElement("div");
  document.body.append(board);
  board.style.height = "500px";
  board.style.width = "500px"; // all elements by default have width of auto 100
  board.style.backgroundColor = "white";
  board.style.margin = "15%";


  var square;

  for (var i = 0; i < 754; i++) {
    square = document.createElement("div");
    square.addEventListener("click", function(ev) {
      ev.target.style.backgroundColor = "orange";
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
