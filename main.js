let chosenColor = 'rgba(175, 199, 226, 0.2)';
var held = true;

(function populateGrid() {
  for (var i = 0; i < 465; i++) {
    $(".grid").append(`<div class="${i}" onclick="myFunction(this)"></div>`);
  }
}());


function myFunction(color) {
    color.style.background = chosenColor;
}

$(".available-colors").on("click", "div", function(e) {
  chosenColor = $( this ).css( "background-color" );
  $(".current").css("background-color", chosenColor);
});
