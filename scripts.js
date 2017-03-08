// Creates the canvas grid

for (var i = 0; i < 1500; i++) {
  console.log(i);
  $('.canvas').append("<div class='grid'></div>");
}

// Selects and applies brush colors

let currentColor = '#000000';

$('.canvas').on('click', 'div', function () {
  $(this).css('background-color', currentColor);
});

$('.blackButton').on('click', function () {
  currentColor = '#000000';
});

$('.grayButton').on('click', function () {
  currentColor = '#6f6f6f';
});

$('.whiteButton').on('click', function () {
  currentColor = "#ffffff";
});

$('.redButton').on('click', function () {
  currentColor = "#fe3f3f";
});

$('.blueButton').on('click', function () {
  currentColor = "#299fff";
});

$('.greenButton').on('click', function () {
  currentColor = "#44b048";
});

$('.yellowButton').on('click', function () {
  currentColor = "#ffea2a";
});

$('.orangeButton').on('click', function () {
  currentColor = "#ff8e25";
});

$('.purpleButton').on('click', function () {
  currentColor = "#b325ff";
});

$('.brownButton').on('click', function () {
  currentColor = "#c37339";
});


// Hold down to paint functionality

$(document).ready(function () {
  let isDown = false;

  $(document).mousedown(function () {
    isDown = true;
  })
  .mouseup(function (){
    isDown = false;
  });

  $('.grid').mouseover(function () {
    if (isDown) {
      $(this).css("background-color", currentColor);
    }
  });
});
