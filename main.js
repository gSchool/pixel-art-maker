var $paintbrush;
var mouseDown = false;

//generate the grid
for (var i = 0; i < 1020; i++) {
    $('.canvas').append('<div class="pixel"></div>');

}

//Get paintbrush color
$('.palette div').on('click', function () {
  $('.selected-color').css('background-color', $(this).css('background-color'));
  $paintbrush = $(this).css('background-color');
})

// Change the pixel color
$('.canvas').on('click', '.pixel', function () {
  $(this).css('background-color', $paintbrush);
})

$('.pixel').mousedown(function () {
  mouseDown = true;
})

$('.pixel').mouseover(function () {
  if (mouseDown) {
  $(this).css('background-color', $paintbrush);
  }
})

$('.pixel').mouseup(function () {
  mouseDown = false;
})

// clear the canvas
$('#clear-button').on('click', function () {
  $('.pixel').css('background-color', 'white');
})

//using the eraser
$('#eraser').on('click', function () {
  $paintbrush = 'white';
})

//when user chooses from the colorpicker
$('#color-pick').on('change',function (){
  $paintbrush = $(this).val();
  $('.selected-color').css('background-color', $paintbrush);
})

//save image into local storage
$('#save').on('click', function(){
  var $colorArray={};
  $('.pixel').each(function(index){
    $colorArray[index]= $(this).css('background-color');
  })
  var str=''
  str=JSON.stringify($colorArray);
  localStorage.setItem("pixel-art", str );
})

//load image from local storage
$('#open').on('click', function(){
 var obj = JSON.parse(localStorage.getItem("pixel-art"));

  $('.pixel').each(function(key){
    $(this).css('background-color', obj[key]);

  })
})
