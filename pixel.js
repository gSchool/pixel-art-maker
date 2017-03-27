
// Build Pixel Canvas
for(i = 0; i < 36; i++) {
  let $row = $("<div class='row'></div>")
  for(j = 0; j < 72; j++) {
    let $pixel = $("<div class='pixel'></div>")
    $row.append($pixel)
  }
  $('.pixeltable').append($row)
}

// Color Select and Apply
let currentColor

$('.pixel').mousedown(function() {
  $(this).css('background-color', currentColor)
})

// Painting Functions
let isDown = false

$(document).mousedown(function() {
  isDown = true
}).mouseup(function() {
  isDown = false
});

$('.pixeltable').on('mouseover', '.pixel', function() {
  if (isDown) {
    $(this).css('background-color', currentColor)
  }
});

// Color Buttons
$('.blackButton').on('click', function () {
  currentColor = 'black'
})

$('.brownButton').on('click', function () {
  currentColor = 'brown'
})

$('.greyButton').on('click', function () {
  currentColor = 'grey'
})

$('.redButton').on('click', function () {
  currentColor = 'red'
})

$('.orangeButton').on('click', function () {
  currentColor = 'orange'
})

$('.yellowButton').on('click', function () {
  currentColor = 'yellow'
})

$('.greenButton').on('click', function () {
  currentColor = 'green'
})

$('.blueButton').on('click', function () {
  currentColor = 'blue'
})

$('.purpleButton').on('click', function () {
  currentColor = 'purple'
})
