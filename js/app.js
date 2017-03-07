
var $paintbrush;

// Generate Loop
for (var j = 0; j < 700; j++) {
    $('.canvas').append('<div class="pixel"></div>');
}

//Grab paintbrush color
$('.palette').on('click', function () {
   $('.selected-color').css('background-color', $(this).css('background-color'));
   $paintbrush = $(this).css('background-color');

})

// Change the pixel color

$('.canvas').on('click', '.pixel', function () {
$(this).css('background-color', $paintbrush)
})


$('.canvas').ready(function(){

  var isDown = false;   // Tracks status of mouse button

  $('.canvas').mousedown(function() {
    isDown = true;      // When mouse goes down, set isDown to true
  })
  .mouseup(function() {
    isDown = false;    // When mouse goes up, set isDown to false
  });

  $(".pixel").mouseover(function(){
    if(isDown) {        // Only change css if mouse is down
       $(this).css('background-color',$paintbrush);
    }
  });
});

// clear the canvas
$('.clear-button').on('click', function () {
  $('.pixel').css('background-color', 'white');
})


// Color picker
$('#full').on('change', function () {
  $paintbrush = $(this).val();
  $('.selected-color').css('background-color', $paintbrush);
})


// save image into local storage
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
var obj={}
 obj = JSON.parse(localStorage.getItem("pixel-art"));

 $('.pixel').each(function(key){
   $(this).css('background-color', obj[key]);
})
 })
