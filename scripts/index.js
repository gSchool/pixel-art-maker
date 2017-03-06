function createCanvas(rowSize, columnSize) {
  let pixelWidth = (100 / rowSize)
  let row = 1;
  let col = 1
  for (var i = 1; i <= rowSize * columnSize; i++) {
    $('div.canvas').append(`<div id="r${row}c${col++}" class="pixel"></div>`);
    if (col > rowSize) {
      col = 1;
      row++;
    }
  };
  $('div.pixel').css('width', `${pixelWidth}%`)
};

function createPalette(palette) {
  for (var i = 0; i < palette.length; i++) {
    $('div.palette').append(`<div id="c-${i}" class="color-choice"></div>`);
    $(`#c-${i}`).css('background', palette[i])
  };

};

$(document).ready(function () {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'lightgreen', 'white'];
  createPalette(colors);
  createCanvas(32, 18);
});

// determine pixel's color from preset
$('.palette').on('click', '.color-choice', function () {
  let $color = $(this).css('background');
  $('.current-color').css('background', $color);
  $('.canvas').css('background', $color);
})
// determine pixel's color from wheel
$('.palette').on('change', '#color-wheel', function () {
  let $color = $(this).val();
  $('.current-color').css('background', $color);
  $('.canvas').css('background', $color);
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
