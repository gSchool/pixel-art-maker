function createCanvas(rowSize, columnSize) {
  let pixelWidth = (100 / rowSize)

  for (var i = 1; i <= rowSize * columnSize; i++) {
    $('div.canvas').append(`<div id="px-${i}" class="pixel"></div>`);
  };
  $('div.pixel').css('width', `${pixelWidth}%`)
};

function createPalette(palette) {
  for (var i = 0; i < palette.length; i++) {
    $('div.palette').append(`<div id="c-${i}" class="color-choice"></div>`);
    $(`#c-${i}`).css('background', palette[i])
  };
  $('div.palette').append('<div class="color-wheel"><input id="color-wheel" type="color"/></div>');

};

$(document).ready(function () {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'lightgreen', 'white'];
  createPalette(colors);
  createCanvas(16, 9);
});

// determine pixel's color from preset
$('.palette').on('click', '.color-choice', function () {
  let $color = $(this).css('background');
  $('.current-color').css('background', $color);
})
// determine pixel's color from wheel
$('.palette').on('mousedown', '#color-wheel', function () {
  let $color = $(this).val();
  $('.current-color').css('background', $color);
})

// change pixel's color on click and drag
let isDragging = false;
$(document).mousedown(function () {
  isDragging = true
}).mouseup(function () {
  isDragging = false
});

function changeColor(selector) {
  $(selector).css({
    'background': $('.current-color').css('background'),
    'border-color': 'rgba(182, 182, 182, 0)',
  })
}

$('.canvas').on('mouseenter', '.pixel', function () {
  if (isDragging) changeColor(this)
}).on('click', '.pixel', function () {
  changeColor(this)
})









//
