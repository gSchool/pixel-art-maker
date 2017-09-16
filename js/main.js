let grid = document.querySelectorAll(".pixel");
let palette = document.querySelectorAll(".paint");
let currentColor = "p22"; //set starting color black
let showColor = document.querySelector(".mixer");
let draw = false; //keep track of whether continuous draw mode is on

// Listen for Mouseup on Document to Cancel Drawing Mode
document.addEventListener("mouseover", function() {
    draw = false;
})

// Listen for Pixel Click (Paint) or Double Click (Erase)
for (let i = 0; i < grid.length; i++) {
    let pixel = grid[i];

    // Continuous Drawing Mode
    pixel.addEventListener("mousedown", function() {
        draw = true;
    })
    pixel.addEventListener("mouseup", function() {
        draw = false;
    })
    pixel.addEventListener("mouseover", function(event) {
        event.stopPropagation(); //stop event from passing to document
        if (draw) event.target.className = `pixel ${currentColor} pixeldelborder`;
    })

    // Single Pixel Drawing Mode
    pixel.addEventListener("click", function(event) {
        event.target.className = `pixel ${currentColor} pixeldelborder`;
    })

    // Erase Single Pixel
    pixel.addEventListener("dblclick", function() {
        event.target.className = `pixel p27 pixeladdborder`;
    })
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
