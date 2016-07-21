$(document).ready(function() {
  console.log('Sanity Check!!!');
});

// Creating the Canvas
for (var i = 0; i < 3000; i++) {
  $('#canvas').append($('<div class="pixel"></div>'));
}

var color = 'white';

$('.pixel').on('click', function(e) {
  console.log('color', color);
  $(this).css('background-color', color);
});

$('.paint-color').on('click', function () {
  var classes = $(this).attr('class');
  color = classes.replace('paint-color ', '');
});
