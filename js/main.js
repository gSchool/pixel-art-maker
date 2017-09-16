let grid = document.querySelectorAll(".pixel");
let palette = document.querySelectorAll(".paint");
let currentColor = "p22";
let showColor = document.querySelector(".mixer");
let draw = false;

// Listen for mouseup on document
document.addEventListener("mouseover", function() {
    draw = false;
})

// Listen for Pixel Click (Paint) or Right Click (Erase)
for (let i = 0; i < grid.length; i++) {
    let pixel = grid[i];
    pixel.addEventListener("mousedown", function () {
        draw = true;
    })
    pixel.addEventListener("mouseup", function () {
        draw = false;
    })
    pixel.addEventListener("mouseover", function(event) {
        event.stopPropagation();
        if (draw) event.target.className = `pixel ${currentColor} pixelnoborder`;
    })
    pixel.addEventListener("click", function(event) {
        event.target.className = `pixel ${currentColor} pixelnoborder`;
    })
    // pixel.addEventListener("contextmenu", function () { //right click

    // })
}

// Listen for Paint Click
for (let j = 0; j < palette.length; j++) {
    let swatch = palette[j];
    swatch.addEventListener("click", function (event) {
        let swatchClassArray = event.target.className.split(" ");
        currentColor = swatchClassArray[1];
        showColor.className = `mixer ${currentColor}`;
    })
}
