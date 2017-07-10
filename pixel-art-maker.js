$(document).ready(function() {
  console.log("ready!");

  //colors
  $('.turqoise').css('background-color', '#2ABB9C');
  $('.green').css('background-color', '#39CA74');
  $('.blue').css('background-color', '#3B99D8');
  $('.purple').css('background-color', '#9A5CB4');
  $('.navy').css('background-color', '#354A5D');
  $('.yellow').css('background-color', '#F0C231');
  $('.orange').css('background-color', '#E47E31');
  $('.red').css('background-color', '#E54E42');
  $('.lightGrey').css('background-color', '#ECF0F1');
  $('.grey').css('background-color', '#95A5A6');
  $('.black').css('background-color', 'black');
  $('.white').css('background-color', 'white');
  $('.eraser').css('background-color', 'white');

  function fillGrid() {
    for (var i = 0; i < 1127; i++) {
      $('#row1').append('<div class="box"></div>')
    }
  }

  fillGrid();

  //choose color
  var currentColor
  $('.color').click(function() {
    currentColor = $(this).css('background-color')
    $('.current').css('background-color', currentColor);
  })

  //apply color
  $('.box').click(function() {
    $(this).css('background-color', currentColor);
    $(this).css('border-color', currentColor)

  })


  for (var i = 0; i < 100; i++) {
    $('box').append($('.box'))
  }



});
