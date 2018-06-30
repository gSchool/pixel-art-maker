// CREATING THE GRID
function gridSize(rowLength, cellLength) {
  for (var i = 0; i < rowLength; i++) {
    var $row = $(`<div class="row"></div>`)
    $('.canvas').append($row)
  }
  for (var i = 0; i < cellLength; i++) {
    var $cell = $(`<div class="cell"></div>`)
   $('.row').append($cell)
  }
}
gridSize(100, 200)


// SAVES COLOR FROM PALLET
var selection;

$('.color').on('click', function(){
  selection = $(this).css('background-color')
  $('.currentColor').css('background-color', selection)
})

//MAKES THE ART!
$(document).ready(function () {
  var isDown = false;
  $(document).mousedown(function(){
    isDown = true;
  })
  .mouseup(function(){
    isDown = false;
  })
  $('.cell').mouseover(function(){
    if (isDown) {
      $(this).css('background-color', selection, 'fast')
    }
  })
})
