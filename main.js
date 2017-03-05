
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

var selection

$('.color').on('click', function(){
  selection = $(this).css('background-color')
})

$('.cell').on('mousedown', function(){
  $(this).css('background-color', selection)
})
