console.log('sanity check');

function createCanvas(rowSize, columnSize) {
  let pixelWidth = (100 / rowSize)
  for (var i = 0; i < rowSize * columnSize; i++) {
    console.log(pixelWidth);
    $('div.canvas').append('<div class="pixel"></div>');
  };
  $('div.pixel').css('width', `${pixelWidth}%`)
};

$(document).ready(function () {
  createCanvas(100, 100);
});
