console.log('sanity check');

$(document).ready(function () {
  for (var i = 0; i < 4; i++) {
    console.log(i)
    $('div.canvas').append('<div class="pixel"></div>')
  }
})
