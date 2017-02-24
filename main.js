var container = document.querySelector('.container')

container.addEventListener('click', function(event) {
  console.log(event.target)
  if (event.target.classList.contains('cell')) {
    event.target.classList.toggle('colored')
  }
})

var width = 10
var height = 10
for (var i = 1; i <= height; i++) {
  var newColumn = document.createElement('section')
  newColumn.classList.add('column')
  container.appendChild(new)
  for (var j = 1; j <= width; j++) {
    var newCell = document.createElement('div')
    newCell.classList.add('column')
    newRow.appendChild(newCell)
  }
}
