function createCanvas(rowSize, columnSize) {
  let pixelWidth = (100 / rowSize)
  for (var i = 0; i < rowSize * columnSize; i++) {
    $('div.canvas').append('<div class="pixel"></div>');
  };
  $('div.pixel').css('width', `${pixelWidth}%`)
};

$(document).ready(function () {
  createCanvas(200, 200);
});
