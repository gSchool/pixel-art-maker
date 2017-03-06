// this is from stack overflow, because the .css method returns the color in rgb format, but .val requires it to be in hex, and there didn't seem to be any simple way to do the conversion
$.fn.getHexBackgroundColor = function() {
  var rgb = $(this).css('background-color');
  if (!rgb) {
    return '#FFFFFF'; //default color
  }
  var hex_rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
  if (hex_rgb) {
    return "#" + hex(hex_rgb[1]) + hex(hex_rgb[2]) + hex(hex_rgb[3]);
  }
  else {
    return rgb; //ie8 returns background-color in hex format then it will make                 compatible, you can improve it checking if format is in hexadecimal
  }
}

var brushColor = '';

$(function(){
  var canvas = $(".canvas");

  for(var i = 0; i < 400; i++){
    canvas.append("<div></div>");
  }

  $('.canvas div').on('click', function(e) {
    var currentTarget = $(e.currentTarget);
    if (brushColor === currentTarget.getHexBackgroundColor()) {
      currentTarget.css('background-color', 'white');
    }
    else {
      currentTarget.css('background-color', brushColor); //second param will set
    }
  });
});

$(function() {
var colors = ['#9C4A40', '#E06B5C', '#E38278', '#D59F5B', '#EDB166', '#F2C78E', '#E5D866', '#FFF073', '#7EBE5D','#9EEE74', '#BAF2A7', '#3255A9', '#4879F3', '#93AAF6', '#564BAA', '#7A6DF4', '#ADA0F7', '#6B4693', '#B276F5', '#CDA5F8', '#000000', '#323232', '#666666', '#999999', '#CCCCCC', '#FFFFFF', '#35241C', '#4A3228', '#6A483A', '#866B5F', '#A48F87'];
var standardColors = $(".standard-colors");
console.log('standard-colors', standardColors);
for (var i = 0; i < colors.length; i++) {
    standardColors.prepend("<div style='background-color:" + colors[i] + ";'></div>");

  }

  $("#color-picker").val('#FFFFFF');

  $('.standard-colors div').on('click', function(e) {
    var currentTarget = $(e.currentTarget);
    var selectedColor = currentTarget.getHexBackgroundColor();
    brushColor = selectedColor;
    $("#color-picker").val(selectedColor);



    console.log('brushColor', brushColor);
    console.log('selectedColor', selectedColor);
    console.log('brushColor', brushColor);
    console.log('click', currentTarget);
    console.log($("#color-picker").val());
  });

});

// $(function() {
//
//   $('.color-picker').on('click', function(e){
//
//     var x = document.getElementById("color-picker").background;
//     console.log('----------', x);
//   });
//
//
// });
