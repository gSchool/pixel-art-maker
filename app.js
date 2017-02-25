'use strict';

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var colorButtons = document.getElementsByClassName("commonStyle");
    var currentColor = '';
    var colorBox = document.getElementById("currentColor");
    var mouseIsDown = false;

    for (var i = 0; i < 6344; i++) {
        var divElem = document.createElement('div');
        canvas.append(divElem);
        if (i === 0) {
          divElem.style.borderTopLeftRadius = "10px";
        }
        if (i === 121) {
          divElem.style.borderTopRightRadius = "10px";
        }
        // divElem.style.border = "1px solid gray";
        divElem.style.width = "8px";
        divElem.style.height = "8px";
        divElem.style.float = "left";

        document.addEventListener("mousedown", function() {
          mouseIsDown = true;
        });
        document.addEventListener("mouseup", function() {
          mouseIsDown = false;
        })
        divElem.addEventListener("mouseover", (event) => {
          if (mouseIsDown) {
            event.target.style.backgroundColor = currentColor;
          }
        });
    }

    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener("click", function(event) {
            currentColor = getComputedStyle(colorButtons[i])
                .backgroundColor;
            colorBox.style.backgroundColor = currentColor;
        });
    }
    // document.addEventListener("mousedown", function() {
    //     console.log(mousedown === true);
    // });
};
