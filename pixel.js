// var container = document.querySelector('.container')
//
// container.addEventListener('click', function(event) {
// 	console.log(event.target)
//   if (event.target.classList.contains('cell')) {
//   	event.target.classList.toggle('colored')
//   }
// })
//
// var cellCount = 9
// for (var i = 1; i <= cellCount; i++) {
//   var newCell = document.createElement('div')
//   newCell.classList.add('cell')
//   newCell.textContent = i
//   container.appendChild(newCell)
// }

var color = 'black';
var paintBrush = document.querySelector(".palette");
paintBrush.addEventListener("click",
	function(event) {
		var target = window.getComputedStyle(event.target);
		color = target.getPropertyValue("background-color")
	});

var first = document.querySelector(".canvas-grid")
first.addEventListener('click',
function(event) {
	event.target.style.backgroundColor = color;
	console.log(event.target)
});
