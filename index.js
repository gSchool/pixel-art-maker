var grid = document.querySelector('.grid')
var cellCount = 400;
for (var i = 1; i<=cellCount; i++) {
  var newCell = document.createElement('section');
  newCell.classList.add('square');
  grid.appendChild(newCell)
}

var color = 'white';

var paintbrush = document.querySelector('.color-palette')

paintbrush.addEventListener('click', function(event){
   var target = window.getComputedStyle(event.target)
   color = target.getPropertyValue('background-color')
   console.log(color);
   })

var clicker = document.querySelector('.grid');
clicker.addEventListener('click', function(event) {
event.target.style.backgroundColor = color;
  // if (event.target.classList.toggle(paintbrush))
})

// // Tutorial on Event Delegation (Chad)
// var container = document.querySelector('.container')
//
// container.addEventListener('click', function(event) {
// 	console.log(event.target)
//   if (event.target.classList.contains('cell')) {
//   	event.target.classList.toggle('colored')
//   }
// })
//
// var cellCount = 100
// for (var i = 1; i <= cellCount; i++) {
//   var newCell = document.createElement('div')
//   newCell.classList.add('cell')
//   newCell.textContent = i
//   container.appendChild(newCell)
// }
