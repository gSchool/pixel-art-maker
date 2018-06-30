console.log("js loaded");
let currentColor = "white";
let paintColor = "blue";

(function buildGrid() {
  for (var i = 0; i < 1000; i++) {
    $(".main-frame").append("<div></div>");
  }
}());


function updateCurrentColorBox(color) {
  $(".current").css("background-color", color);
}

$(".colors div").on("click", function () {
  var bgColor = $(this).css("background-color");
  paintColor = bgColor;
  updateCurrentColorBox(bgColor);
});

$(".main-frame").on("click", 'div', function (e) {
  $(this).css("background-color", paintColor);
});

$('.below-colors input').change(function () {
  let newColor = $(this).val();
  paintColor = newColor;
  updateCurrentColorBox(newColor);
});
