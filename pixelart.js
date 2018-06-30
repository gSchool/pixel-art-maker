function readyFn( jQuery ) {
    console.log("here we go")




var colorHolder = ''

$(".key").on("click", function (){
  colorHolder = $(this).css("backgroundColor");
  $(".indicator").css("backgroundColor", colorHolder);
  console.log(colorHolder);
  console.log($(this))
})

$(".box").on("click", function (){
  $(this).css("backgroundColor", colorHolder);

  $(this).removeClass("canvas")
  $(this).css("backgroundColor", colorHolder);
  if ($(this).css("backgroundColor") === "rgb(255, 255, 255)") {
    $(this).addClass("canvas")
  }
  console.log($(this))
})



//copypasta

// $(".box").mousedown(function () {
//   console.log("mousedown")
//     $(this).mousemove(function () {
//         console.log("mousemove");
//         $('this').css("backgroundColor", colorHolder);
//         $('this').removeClass("canvas")
//         $('this').css("backgroundColor", colorHolder);
//     });
// }).mouseup(function () {
//     $(this).unbind('mousemove');
//       console.log("mouseup")
// }).mouseout(function () {
//     $(this).unbind('mousemove');
//       console.log("mouseout")
// });
//



























}

$( window ).on( "load", readyFn );
