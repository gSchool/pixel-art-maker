(function() {
    "use strict";

    let canvas = document.getElementById('canvas');
    let palette = document.getElementById('palette');
    let colorInd = document.getElementById('colorIndicator')
    let currColor;
    for (var i = 0; i < 256; i++) {
        let elem = document.createElement('div');
        elem.className = 'pixel';
        canvas.append(elem);
    }

    var mouseDown = false;
    document.body.onmousedown = function() {
        mouseDown = true;
    }
    document.body.onmouseup = function() {
        mouseDown = false;
    }

    if (mouseDown && )

        palette.onclick = function(event) {
        let target = event.target;
        if (target.className === 'paletteItem') {
            currColor = target.style.backgroundColor;
            colorInd.style.backgroundColor = currColor;
            console.log('working ' + currColor);
        }
    }

    canvas.onclick = function(event) {
        let target = event.target;
        if (target.classList[0] === 'pixel') {
            changeColor(target);
        }
    }

    function changeColor(target) {
        target.style.backgroundColor = currColor;
    }

})();