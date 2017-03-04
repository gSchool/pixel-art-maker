console.log('sanity check');

function createCanvas(rowSize, columnSize) {
  for (var i = 0; i < rowSize * columnSize; i++) {
    let pixelWidth = (100 / rowSize)
    console.log(pixelWidth);
    $('div.canvas').append('<div class="pixel"></div>');
    $('div.pixel').css('width', `${pixelWidth}%`)
  };
};

$(document).ready(function () {
  createCanvas(20, 20);
});
