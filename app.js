'use strict';

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var colorButtons = document.getElementsByClassName("commonStyle");
    var currentColor = '';
    var colorBox = document.getElementById("currentColor");

    for (var i = 0; i < 363; i++) {
        var divElem = document.createElement('div');
        canvas.append(divElem);
        divElem.style.border = "1px solid gray";
        divElem.style.height = "9%";
        divElem.style.width = "3%";
        divElem.style.float = "left";

        divElem.addEventListener("click", (event) => {
            event.target.style.backgroundColor = currentColor;
        });
    }

    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener("click", function(event) {
            currentColor = getComputedStyle(colorButtons[i])
                .backgroundColor;
            colorBox.style.backgroundColor = currentColor;
        });
    }
};
