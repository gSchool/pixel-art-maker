


$(function(){
  var canvas = $(".canvas");

  for(var i=0;i<100;i++){
    canvas.append("<div></div>");
  }
});

$(function() {
var colors = ['#9C4A40', '#E06B5C', '#E38278', '#D59F5B', '#EDB166'];
var palette = $(".palette");

for (var i = 0; i < colors.length; i++) {
    palette.append("<div style='background-color:" + colors[i] + ";'></div>");

  }

  $('.palette div').on('click', function(e) {

    console.log('click', e.currentTarget);
  });

});
