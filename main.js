// Intial Start

// var sectionOne= document.querySelector('.one');
//
// sectionOne.querySelector(".first").style.backgroundColor = "red";
// sectionOne.querySelector(".second").style.backgroundColor = "green";
//
// var sectionTwo=
// document.querySelector('.two');
// sectionTwo.querySelector(".third").style.backgroundColor = "green";
// sectionTwo.querySelector(".fourth").style.backgroundColor = "red";


var artColor = "fff";

var paint =
document.querySelector(".colorBar");

paint.addEventListener('click', function(event){
console.log(event.target);
  var targetStyle = window.getComputedStyle(event.target);
  var color = targetStyle.getPropertyValue("background-color");
  artColor = color;
  console.log(artColor);
});

var container = document.querySelector('.main');
container.addEventListener('click', function(event) {
  console.log(event.target);
  if (event.target.classList.contains('cell')) {
    event.target.style.backgroundColor = artColor;
  }
});

// Chad's code

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
