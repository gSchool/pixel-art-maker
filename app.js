'use strict';

window.onload = function() {
    var divElem = document.createElement('div');
    var canvas = document.getElementById('canvas');
    var red = document.getElementsByClassName("colorRed")[0];
    var green = document.getElementsByClassName("colorGreen")[0];
    var colorButtons = document.getElementsByClassName("commonStyle");
    canvas.append(divElem);
    divElem.style.backgroundColor = "red";
    divElem.style.height = "10%";
    divElem.style.width = "10%";
    var currentColor = '';

    divElem.addEventListener("click", () => {
        divElem.style.backgroundColor = currentColor;
    })
    red.addEventListener("click", (event) => {
        currentColor = getComputedStyle(red)
            .backgroundColor;
    });
    green.addEventListener("click", (event) => {
        currentColor = getComputedStyle(green)
            .backgroundColor;
    });

    for (let i = 0; i < colorButtons.length; i++) {
      colorButtons[i].addEventListener("click", function() {
        console.log("hey");
      });
    }
};
