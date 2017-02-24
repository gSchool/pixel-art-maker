var color = 'black';

var paintBrush = document.querySelector('.palette');

paintBrush.addEventListener('click', function(event) {
  var target = window.getComputedStyle(event.target);
  color = target.getPropertyValue("background-color");
  console.log(color);
})

var clicker = document.querySelector('.grid');

clicker.addEventListener('click', function(event) {
  event.target.style.backgroundColor = color;
})
