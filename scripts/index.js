console.log('sanity check');
// let $px = $('div.canvas').html('<div>stuff</div>')
$(document).ready(function () {
  for (var i = 0; i < 4; i++) {
    console.log(i)
    $('div.canvas').append('<div class="pixel">stuff</div>')
  }
})
