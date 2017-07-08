$(function() {

//Complete this function to autofill grid
// function fillGrid(){
//   var fillBox = $('.abox')
//     for (var i = 1; i < 100; i++){
//       $('#artContainer').append(<div class="abox"></div>)
//     }
// }
// fillGrid();


var currentColor;
// Brush and Eraser
$('.activeColor').append('<h3>Brush</h3>')
$('#eraser').append('<h3>Eraser</h3>')

// Pick a color
$('.pbox').click(function(){
  currentColor = $(this).css('background-color')
  $('.activeColor').css('background-color', currentColor)
})

// Paint a color
$('.abox').click(function(){
  $(this).css('background-color', currentColor)
  // Reinstate this for full coloring
  // $(this).css('border-color', currentColor)
})

// Drag for color

// $('.abox').dblclick(function(){
//   $(this).css('background-color', currentColor)
// })







})
