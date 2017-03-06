var $paintbrush;

//Grab paintbrush color
$('.palette-vertical').on('click', function () {
   $('.selected-color-button').css('background-color', $(this).css('background-color'));
   $paintbrush = $(this).css('background-color');

})

$('.palette-horizontal').on('click', function () {
   $('.selected-color-button').css('background-color', $(this).css('background-color'));
   $paintbrush = $(this).css('background-color');

})


// Change the pixel color
$('.canvas').on('click', '.pixel', function () {
$(this).css('background-color', $paintbrush)
})

// clear
$('.clear-button').on('click', function () {
  $('.pixel').css('background-color', 'white');
  $('.selected-color-button').css('background-color', 'white');
})

for (var j = 0; j < 1000; j++) {
    $('.canvas').append('<div class="pixel"></div>');
}

// $('.pixel').mousedown(function () {
//   $(this).css('background-color', $paintbrush);
// })
//
// $('.pixel').mouseenter(function () {
//   $(this).css('background-color', $paintbrush);
// })
//
// $('.pixel').mouseup(function () {
//
// })
