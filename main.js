var container = document.querySelector('.container')


// DEFINE GRID AND AMOUNT OF SQUARES
var cellCount = 2100
for (var i = 1; i <= cellCount; i++) {
    var newCell = document.createElement('div')
    newCell.classList.add('grid')
    // newCell.textContent =
    container.appendChild(newCell)
}


//COLOR THE INDIVIDUAL GRID
container.addEventListener('mousedown', function(event) {
    console.log(event.target)
    if (event.target.classList.contains('grid')) {
        event.target.style.backgroundColor = color
    }
})

// COLOR WHILE MOUSE IS HELD DOWN
container.addEventListener('mouseover', function(event) {
  if(event.target.classList.contains('grid') && event.buttons === 1) {
    event.target.style.backgroundColor = color
  }
})



// COLOR PALLETE & COLORS
var color = "lightblue";

var paletteBlue = document.querySelector("#blue");
var paletteRed = document.querySelector("#red");
var paletteWhite = document.querySelector("#white");
var paletteGreen = document.querySelector("#green");
var paletteYellow = document.querySelector("#yellow");
var paletteLightblue = document.querySelector("#lightblue");
var palettePurple = document.querySelector("#purple");
var paletteOrange = document.querySelector("#orange");
var paletteLightgreen = document.querySelector("#lightgreen");
var paletteIndianred = document.querySelector("#indianred");
var paletteHotpink = document.querySelector("#hotpink");
var paletteBlack = document.querySelector("#black");


paletteBlue.addEventListener("click", function() {
    color = "blue";
    document.querySelector('.currentColor').style.backgroundColor = color;
	
})

paletteRed.addEventListener("click", function() {
    color = "red";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteWhite.addEventListener("click", function() {
    color = "white";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteGreen.addEventListener("click", function() {
    color = "green";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteYellow.addEventListener("click", function() {
    color = "yellow";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteLightblue.addEventListener("click", function() {
    color = "lightblue";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

palettePurple.addEventListener("click", function() {
    color = "purple";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteOrange.addEventListener("click", function() {
    color = "orange";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteLightgreen.addEventListener("click", function() {
    color = "lightgreen";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteIndianred.addEventListener("click", function() {
    color = "indianred";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteHotpink.addEventListener("click", function() {
    color = "hotpink";
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteBlack.addEventListener("click", function() {
    color = "black";
    document.querySelector('.currentColor').style.backgroundColor = color;
})
