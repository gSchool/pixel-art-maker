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


for (var j = 0; j < 1200; j++) {
    $('.canvas').append('<div class="pixel"></div>');
}

// to drag and paint (from StackOverflow)
$('.canvas').ready(function () {
  // Tracks status of mouse button
  var isDown = false;

  $('.canvas').mousedown(function () {
     // When mouse goes down, set isDown to true
    isDown = true;
  })
  .mouseup(function () {
    // When mouse goes up, set isDown to false
    isDown = false;
  });

  $(".pixel").mouseover(function(){
    if(isDown) {
       // Only change css if mouse is down
       $(this).css('background-color', $paintbrush);
    }
  });
});

$('.pick-color').on('change', function () {
  $paintbrush = $(this).val();
  $('.selected-color-button').css('background-color', $paintbrush);
})
