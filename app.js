$(function(){

  function pixels(){
    for (var i = 0; i < 1998; i++) {
      var div = $("<td></td>");
      $(".board").append(div);
      $(div).addClass("pix").attr("value",i);
    }
  }
  pixels();

  function colorSelector(){
    $(".board").append("<p>Choose a color:</p>")
    .append("<input type='color' id='color_chooser' value=''>")
    .append("<button id='save_button'>Save Color</button>")
    .append("<form></form>");
    $("form").append("<input type = 'radio' name = 'mouse' value = 'click' checked>Mouse Click<br>")
    .append("<input type = 'radio' name = 'mouse' value = 'over'>Mouse Over<br> ");
  }
  colorSelector();

  function chooseColor(){
    $("#save_button").click(function(){
      var my_color = $("#color_chooser").val();
      makeColor(my_color);
    });
  }
  chooseColor();

  function makeColor(color){
    if($("input:radio:checked").val()==="click"){
      $(".pix").on("click",function(){
        $(this).css("background-color",color);
      });
    }
    if($("input:radio:checked").val()==="over"){
      $(".pix").mouseover(function(){
        $(this).css("background-color",color);
      });
    }
  }

});
