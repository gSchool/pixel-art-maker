

var isDown = false; // Tracks status of mouse button

$(document).mousedown(function() {
  isDown = true; // When mouse goes down, set isDown to true
})
.mouseup(function() {
  isDown = false; // When mouse goes up, set isDown to false
});

selectGridSize ();

useSelectedColorButton ('#button1, #button2, #button3, #button4, #button5, #button6, #button7, #button8', '.grid, .grid1, .grid2');

useColorPickerColor('.grid, .grid1, .grid2');


changeBackgroundColor('.grid, .grid1, .grid2', '#backgroundColor1', 'lightpink', 'beige', 'white', 'lightblue');
changeBackgroundColor('.grid, .grid1, .grid2', '#backgroundColor2', 'lightblue', 'beige', 'white', 'lightpink');
changeBackgroundColor('.grid, .grid1, .grid2', '#backgroundColor3', 'lightpink', 'lightblue', 'white', 'beige');
changeBackgroundColor('.grid, .grid1, .grid2', '#backgroundColor4', 'lightpink', 'beige', 'lightblue', 'white');

clearCanvas();



// =============== Functions =========================

function selectGridSize (){

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
    $('div').removeClass('grid1 grid2').addClass('grid');
  });

  $('#sizeSelector1').on('click', function(){
    $('div').removeClass('grid grid2').addClass('grid1');
  });

  $('#sizeSelector2').on('click', function(){
    $('div').removeClass('grid grid1').addClass('grid2');
  });
}

function backgroundColor(grid, col1, col2, col3, addCol){
  $(grid).removeClass(`${col1} ${col2} ${col3}`).addClass(`${addCol}`);
}

function changeBackgroundColor(grid, button, col1, col2, col3, addCol){
  $(button).on('click', function(){
    backgroundColor(grid, col1, col2, col3, addCol);
  });
}

function useSelectedColorButton (button, grid){
  $(button).on('click', function(){
    var color = $(this).css('background-color');

    $(grid).mouseover(function(){
      if(isDown) {    // Only change css if mouse is down
        $(this).css('background-color', color);
      }
    });
  });
}

function useColorPickerColor (grid){
  $('.colorPicker').on('change',function(){
    var $color = $('.colorPicker').val();

    $(grid).mouseover(function(){
      if(isDown) {$(this).css('background-color', $color);
      }
    });
  });
}

function clearCanvas (){
  $('.clearButton').click(function() {
    location.reload();
  });
}
