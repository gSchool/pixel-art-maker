
var brushColor = '';

$(function(){
  var canvas = $(".canvas");

  for(var i=0;i<400;i++){
    canvas.append("<div></div>"); // appends to bottom of what is already there
  }
  // $(this).toggleClass
  $('.canvas div').on('click', function(e) {
    var currentTarget = $(e.currentTarget);
    console.log('hey', currentTarget.css('background-color'));
    console.log('brush', brushColor);
    if (brushColor === currentTarget.css('background-color')) {
      console.log('xxxx');
      currentTarget.css('background-color', 'white');
    }
    else {
      currentTarget.css('background-color', brushColor); //second param will set
      console.log(e.currentTarget);
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

  $('.standard-colors div').on('click', function(e) {
    var currentTarget = $(e.currentTarget);
    var selectedColor = currentTarget.css('background-color');
    // var pickerColor = .custom-color-container.input;
    brushColor = selectedColor;

    console.log('brushColor', brushColor);
    console.log('selectedColor', selectedColor);
    console.log('brushColor', brushColor);
    console.log('click', currentTarget);
  });

});
