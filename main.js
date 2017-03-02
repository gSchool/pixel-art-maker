



var container = document.querySelector('.container')


container.addEventListener('click', function(event) {
	console.log(event.target)

  if (event.target.classList.contains('grid')) {
  	event.target.style.backgroundColor = color
  }


})

var cellCount = 1600
for (var i = 1; i <= cellCount; i++) {
  var newCell = document.createElement('div')
  newCell.classList.add('grid')
  // newCell.textContent =
  container.appendChild(newCell)
}


var color = "#ffffff";



var paletteBlue = document.querySelector("#blue");
var paletteRed = document.querySelector("#red");
var paletteWhite = document.querySelector("#white");
var paletteGreen = document.querySelector("#green");
var paletteYellow = document.querySelector("#yellow");
var palettePurple = document.querySelector("#purple");
var paletteBlack = document.querySelector("#black");


paletteBlue.addEventListener("click", function(){
 color = "blue";
 console.log("blue");
    document.querySelector('.currentColor').style.backgroundColor = color;
})

paletteYellow.addEventListener("click", function(){
 color = "yellow";
 document.querySelector('.currentColor').style.backgroundColor = color;

 console.log("yellow");
})

paletteWhite.addEventListener("click", function(){
 color = "white";
 document.querySelector('.currentColor').style.backgroundColor = color;

 console.log("white");

})
paletteRed.addEventListener("click", function(){
 color = "#e32020 ";
 document.querySelector('.currentColor').style.backgroundColor = color;

 console.log("red");

})

paletteGreen.addEventListener("click", function(){
 color = "#2ae831";
 document.querySelector('.currentColor').style.backgroundColor = color;

 console.log("green");
})


palettePurple.addEventListener("click", function(){
 color = "purple";
 document.querySelector('.currentColor').style.backgroundColor = color;

 console.log("purple");
})

paletteBlack.addEventListener("click", function(){
 color = "black";
 document.querySelector('.currentColor').style.backgroundColor = color;

 console.log("black");
})
