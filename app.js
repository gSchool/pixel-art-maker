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