



var container = document.querySelector('.container')

container.addEventListener('click', function(event) {
	console.log(event.target)
  if (event.target.classList.contains('grid')) {
  	event.target.style.backgroundColor = color
  }
})

var cellCount = 1000
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




paletteBlue.addEventListener("click", function(){
 color = "blue";
 console.log("blue");

})

paletteYellow.addEventListener("click", function(){
 color = "yellow";
 console.log("yellow");
})

paletteWhite.addEventListener("click", function(){
 color = "white";
 console.log("white");

})
paletteRed.addEventListener("click", function(){
 color = "#e32020 ";
 console.log("red");

})

paletteGreen.addEventListener("click", function(){
 color = "#2ae831";
 console.log("green");

})

var container = document.getElementsByClassName('container');
for (let i = 0; i < container.length; i++){
 document.getElementsByClassName('grid')[i].addEventListener( 'click', function() {
   document.getElementsByClassName('grid')[i].style.backgroundColor = color;
 })
}
