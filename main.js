


for (var i = 1; i <= 3000; i++) {
  var $gridBox = $('<div class="grid"></div>');
  $('.gridWrapper').append($gridBox);
}

for (var j = 1; j <= 750; j++) {
  var $gridBox = $('<div class="grid1"></div>');
  $('.gridWrapper').append($gridBox);
}

for (var k = 1; k <= 600; k++) {
  var $gridBox = $('<div class="grid2"></div>');
  $('.gridWrapper').append($gridBox);
}

$('#sizeSelector').on('click', function(){
  $('div').removeClass('grid1').addClass('grid');
  $('div').removeClass('grid2').addClass('grid');
});

$('#sizeSelector1').on('click', function(){
  $('div').removeClass('grid').addClass('grid1');
  $('div').removeClass('grid2').addClass('grid1');
})

$('#sizeSelector2').on('click', function(){
$('div').removeClass('grid').addClass('grid2');
$('div').removeClass('grid1').addClass('grid2');
});







var isDown = false; // Tracks status of mouse button

  $(document).mousedown(function() {
    isDown = true; // When mouse goes down, set isDown to true
  })
  .mouseup(function() {
    isDown = false; // When mouse goes up, set isDown to false
  });


// ******************   Blue Button  *****************

$('#button1').on('click', function(){
  var $blue = $(this).css('background-color');

  $(".grid").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $blue);
    }
  });
  $(".grid1").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $blue);
    }
  });
  $(".grid2").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $blue);
    }
  });
});

// ******************   Orang Button  *****************

$('#button2').on('click', function(){
  var $orange = $(this).css('background-color');

  $(".grid").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $orange);
    }
  });
  $(".grid1").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $orange);
    }
  });
  $(".grid2").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $orange);
    }
  });
});

// ******************   Green Button  *****************

$('#button3').on('click', function(){
  var $green = $(this).css('background-color');

  $(".grid").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $green);
    }
  });
  $(".grid1").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $green);
    }
  });
  $(".grid2").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $green);
    }
  });
});

// ******************   yellow Button  *****************

$('#button4').on('click', function(){
  var $yellow = $(this).css('background-color');

  $(".grid").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $yellow);
    }
  });
  $(".grid1").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $yellow);
    }
  });
  $(".grid2").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $yellow);
    }
  });
});

// ******************   pink Button  *****************

$('#button5').on('click', function(){
  var $pink = $(this).css('background-color');

  $(".grid").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $pink);
    }
  });
  $(".grid1").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $pink);
    }
  });
  $(".grid2").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $pink);
    }
  });
});

// ******************   Grey Button  *****************

$('#button6').on('click', function(){
  var $grey = $(this).css('background-color');

  $(".grid").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $grey);
    }
  });
  $(".grid1").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $grey);
    }
  });
  $(".grid2").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $grey);
    }
  });
});

// ******************   Black Button  *****************

$('#button7').on('click', function(){
  var $black = $(this).css('background-color');

  $(".grid").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $black);
    }
  });
  $(".grid1").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $black);
    }
  });
  $(".grid2").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $black);
    }
  });
});

// ******************   Red Button  *****************

$('#button8').on('click', function(){
  var $red = $(this).css('background-color');

  $(".grid").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $red);
    }
  });
  $(".grid1").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $red);
    }
  });
  $(".grid2").mouseover(function(){
    if(isDown) {    // Only change css if mouse is down
      $(this).css('background-color', $red);
    }
  });
});

// ******************   Color Picker  *****************

$(".colorPicker").on("change",function(){
  var $color = $('.colorPicker').val();
// $(".selected").css("background-color", $color);


  $(".grid").mouseover(function(){
    if(isDown) {  // Only change css if mouse is down
       $(this).css('background-color', $color);
    }
  });

  $(".grid1").mouseover(function(){
    if(isDown) {  // Only change css if mouse is down
       $(this).css('background-color', $color);
    }
  });

  $(".grid2").mouseover(function(){
    if(isDown) {  // Only change css if mouse is down
       $(this).css('background-color', $color);
    }
  });
});

// *********************************************************

$('.clearButton').click(function() {
    location.reload();
});



// ***********Testing local storage**************
//not working

localStorage.myCanvas = JSON.stringify($('#gridWrap'));

function init(){
if(localStorage.myCanvas){
  $oldInfo =  JSON.parse(localStorage.myCanvas);
  $('gridWrap').html($oldInfo);
  }
}
//********* end local storage testing ***************


$('#backgroundColor1').on('click', function(){
  $('.grid').addClass("lightblue").removeClass('lightpink beige white');
});
$('#backgroundColor2').on('click', function(){
  $('.grid').addClass("lightpink").removeClass('lightblue beige white');
});
$('#backgroundColor3').on('click', function(){
  $('.grid').addClass("beige").removeClass('lightblue lightpink white');
});
$('#backgroundColor4').on('click', function(){
  $('.grid').addClass("white").removeClass('lightblue lightpink beige');
});
