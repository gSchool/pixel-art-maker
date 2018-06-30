
var main = document.querySelector('.main')

container.addEventListener('click', function(div) {
	console.log(event.target)
  if (event.target.classList.contains('cell')) {
  	event.target.classList.toggle('colored')
  }
})

var cellCount = 4
for (var i = 0; i <= cellCount; i++) {
  var newCell = document.createElement('div')
  newCell.classList.add('cell')
  newCell.textContent = i
  container.appendChild(newCell)
}
