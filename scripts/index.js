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
  }
};

$(document).ready(function () {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'lightgreen', 'white'];
  createPalette(colors);
  createCanvas(16, 9);
});

//TBD determine pixel's color
$('.palette').on('click', '.color-choice', function () {
  let $color = $(this).css('background');
  $('.current-color').css('background', $color);
})
// change pixel's color on click
$('.canvas').on('click', '.pixel', function () {
  $(this).css('background', $('.current-color').css('background'))
})
