

var brush;
var current = document.querySelector('.current');

var colorField = document.querySelector('#container');
colorField.addEventListener('click', function(event) {
  if (event.target.parentNode.id === 'palette-container') {
    brush = event.target.style.background;
    current.style.background = brush;
  } else if (event.target.className === 'pixel') {
    event.target.style.background = brush;
    event.target.style.borderColor = brush;
  }
});
