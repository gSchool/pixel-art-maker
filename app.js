(function() {
    "use strict";

    let canvas = document.getElementById('canvas');
    let palette = document.getElementById('palette');
    let colorInd = document.getElementById('colorIndicator')
    let colorWheel = document.getElementById('colorWheel');
    let currColor;
    let mouseState = false;

    for (var i = 0; i < 256; i++) {
        let elem = document.createElement('div');
        elem.className = 'pixel';
        canvas.append(elem);

        elem.addEventListener('mousedown', function() {
            mouseState = true;
            changeColor(elem);
        })
        elem.addEventListener('mouseenter', function() {
            if (mouseState) {
                changeColor(elem);
            }
        })
        elem.addEventListener('mouseup', function() {
            mouseState = false;
        })
    }

    colorWheel.addEventListener('change', function() {
        console.log(colorWheel.value);
        currColor = colorWheel.value;
        colorInd.style.backgroundColor = currColor;
    })

    palette.onclick = function(event) {
        let target = event.target;
        if (target.className === 'paletteItem') {
            currColor = target.style.backgroundColor;
            colorInd.style.backgroundColor = currColor;
        }
    }

    canvas.onclick = function(event) {
        let target = event.target;
        if (target.className === 'pixel') {
            changeColor(target);
        }
    }

    function changeColor(target) {
        target.style.backgroundColor = currColor;
    }

})();