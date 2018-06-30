$(function() {

// Autofill art grid
function fillGrid(){
    for (var i = 0; i < 860; i++){
      $('#artContainer').append('<div class="abox"></div>')
    }
}
fillGrid();


var currentColor;
// Brush and Eraser and reset
$('#brushColor').append('<h3>Brush</h3>')
$('#eraser').append('<h3>Eraser</h3>')
$('#reset').append('<h3>Clear</h3>')

// Pick a color
$('.pbox').click(function(){
  currentColor = $(this).css('background-color')
  $('#brushColor').css('background-color', currentColor)
})

//Paint and Drag
$('.abox').mousedown(function() {
    $(".abox").bind('mouseover',function(){
        $(this).css("background-color", currentColor);
    });
})
.mouseup(function() {
  $(".abox").unbind('mouseover');
});

$('.abox').mousedown(function() {
  $(this).css("background-color", currentColor);
});

// Fill in color

// $('.abox').dblclick(function(){
//   $(this).css({Flood_fill: currentColor})
// })x

//Clear the canvas

$('#reset').click(function(){
  $('.abox').each(function(){
    $(this).css('background-color', 'lightgray')
  })
})








  });
