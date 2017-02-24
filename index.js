var grid=document.querySelector('.grid')

grid.addEventListener('click', function (event) {
  event.target.style.backgroundColor = 'red'
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
