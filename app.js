'use strict';

window.onload = function() {

    var canvas = document.getElementById('canvas');
    var colorButtons = document.getElementsByClassName("commonStyle");
    var currentColor = 'black';
    var colorBox = document.getElementById("currentColor");
    var mouseIsDown = false;
    var gridToggle = document.getElementById("gridToggle");
    var colorSetter = document.getElementById("colorSetter");
    var colorWheel = document.getElementById("colorWheel");
    var eraseButton = document.getElementById("eraseButton");
    var resetButton = document.getElementById("resetButton");
    var pixels = document.getElementsByClassName("pixels");
    var nameDisplay = document.getElementById("nameDisplay");

    eraseButton.addEventListener("click", function() {
        currentColor = "white";
        colorBox.style.backgroundColor = currentColor;
        nameDisplay.innerHTML = currentColor;
    });

    resetButton.addEventListener("click", function() {
        currentColor = "black";
        colorBox.style.backgroundColor = currentColor;
        for (let i = 0; i < pixels.length; i++) {
            pixels[i].style.backgroundColor = "white";
        }
        nameDisplay.innerHTML = currentColor;
    });

    colorSetter.addEventListener("click", function() {
        currentColor = colorWheel.value;
        colorBox.style.backgroundColor = currentColor;
        nameDisplay.innerHTML = currentColor;
    });

    document.addEventListener("mousedown", function() {
        mouseIsDown = true;
    });

    document.addEventListener("mouseup", function() {
        mouseIsDown = false;
    });

    for (var i = 0; i < 6344; i++) {

        var divElem = document.createElement('div');
        canvas.append(divElem);

        divElem.className = "pixels";
        divElem.style.border = "1px solid rgba(224, 224, 224, 0.4)";
        divElem.style.width = "9px";
        divElem.style.height = "9px";
        divElem.style.float = "left";

        divElem.addEventListener("mouseover", (event) => {
            if (mouseIsDown) {
                event.target.style.backgroundColor = currentColor;
            }
        });

        divElem.addEventListener("click", (event) => {
            event.target.style.backgroundColor = currentColor;
        });

    }
    gridToggle.addEventListener("change", function(ev) {
        if (ev.target.value === "hideGrid") {
            for (let i = 0; i < pixels.length; i++) {
                pixels[i].style.border = null;
            }
        }
        if (ev.target.value === "displayGrid") {
            for (let j = 0; j < pixels.length; j++) {
                pixels[j].style.border = "1px solid rgba(224, 224, 224, 0.4)";
            }
        }
    });

    // cycle through colors
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener("click", function(event) {
            currentColor = getComputedStyle(colorButtons[i]).backgroundColor;
            colorBox.style.backgroundColor = currentColor;
            nameDisplay.innerHTML = colorButtons[i].classList[2];
        });
    }
};
