// create grid
for (var i = 0; i < 2024; i++) {
  $('.grid').append('<div class="pixel"></div>')
}

// paint colors
$('.paint').click(function() {
  $(this).css('border', 'transparent').siblings().removeAttr('style');

  var currentColor = $(this).css('background-color');
  $('.current-color-box').removeAttr('style').css('background-color', currentColor);

  $('.pixel').mousedown(function() {
    $(this).css('background', currentColor).css('border', 'transparent');

    $('.pixel').bind('mousemove', function() {
      $(this).css('background', currentColor).css('border', 'transparent');
    })
  })

  $('.pixel').mouseup(function() {
    $('.pixel').unbind('mousemove');
  })

})

// color picker
$('.eyedrop').click(function() {
  $(this).css('transform', 'scale(1.3, 1.3)').siblings().removeAttr('style')

  $('.color-picker').show()

  $('#click').click(function() {
    var pickedColor = $('#colorInput').val();

    $('.current-color-box').removeAttr('style').css('background-color', pickedColor);

    $('.pixel').mousedown(function() {
      $(this).css('background', pickedColor).css('border', 'transparent');

      $('.pixel').bind('mousemove', function() {
        $(this).css('background', pickedColor).css('border', 'transparent');
      })
    })

    $('.pixel').mouseup(function() {
      $('.pixel').unbind('mousemove');
    })
  })

  $('.close').click(function() {
    $('.color-picker').hide()
    $('.eyedrop').removeAttr('style')
  })
})

// erase
$('.erase').click(function() {
  $(this).css('transform', 'scale(1.3, 1.3)').siblings().removeAttr('style')

  $('.current-color-box').removeAttr('style').css('background-image', 'linear-gradient(-16deg, transparent, transparent 48%, red 49%, red 51%, transparent 52%, transparent)');

  $('.pixel').mousedown(function() {
    $(this).removeAttr('style');

    $('.pixel').bind('mousemove', function() {
      $(this).removeAttr('style');
    })
  })

  $('.pixel').mouseup(function() {
    $('.pixel').unbind('mousemove');
  })
})

// delete
$('.delete').click(function() {
  $('.current-color-box').removeAttr('style').css('background-image', 'linear-gradient(-16deg, transparent, transparent 48%, red 49%, red 51%, transparent 52%, transparent)');
  $('.pixel').removeAttr('style');
})
