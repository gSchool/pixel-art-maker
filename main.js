
// *****FOR GRID*****
for(let i = 0; i < 1500; i++) {
var $gridWrap = $('<div class="grid"></div>');
$('.grid-wrap').append($gridWrap)
}

// *******COLOR PICKER******
var currentColor = '#FFFFFF';

$('#color1').on('click', function () {
  currentColor = $(this).css('background-color');
})

$('#color2').on('click', function () {
  currentColor = $(this).css('background-color');
})

$('#color3').on('click', function () {
  currentColor = $(this).css('background-color');
})

$('#color4').on('click', function () {
  currentColor = $(this).css('background-color');
})

$('#color5').on('click', function () {
  currentColor = $(this).css('background-color');
})

$('.grid').on('click', function () {
  $(this).css('background-color', currentColor);
})


// ******PAINTBRUSH******

$(document).ready(function(){
  var isDown = false;
  $(document).mousedown(function() {
    isDown = true;
  })
  .mouseup(function() {
    isDown = false;
  });
  $(".grid").mouseover(function(){
    if(isDown) {
       $(this).css('background-color', currentColor);
    }
  });
});
