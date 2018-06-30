document.addEventListener('DOMContentLoaded', function () {


  var canvasSize = 400;

  var pointer = document.querySelector('#pixelCanvas')
  var secondPointer = document.querySelector('#colorPalette')


  for(let i = 0; i < canvasSize; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList = 'pixelBoys'
    pointer.appendChild(newDiv)

  }


  function createColor () {


    var sweetColors = ['#FFFFFF', '#FAFAFA', '#F4F4F4', '#ECECEC', '#E8E8E8', '#E3E3E3', '#DDDDDD', '#DADADA', '#D5D5D5', '#CFCFCF', '#C8C8C8', '#C5C5C5', '#C1C1C1', '#BFBFBF', '#BBBBBB', '#B9B9B9', '#B4B4B4', '#B0B0B0', '#ABABAB', '#A7A7A7', '#A5A5A5', '#9F9F9F', '#9E9E9E', '#999999', '#959595', '#939393', '#909090', '#8E8E8E', '#8A8A8A', '#898989', '#878787', '#828282', '#808080', '#7E7E7E', '#777777', '#707070', '#6D6D6D', '#6A6A6A', '#676767', '#666666', '#5F5F5F', '#555555', '#505050', '#4F4F4F', '#4B4B4B', '#464646', '#414141', '#3B3B3B', '#353535', '#303030', '#000000']


    for(let j = 0; j < 50; j++) {
      var newColor = document.createElement('div');
      newColor.classList = 'colorBoys'



      secondPointer.appendChild(newColor)
      newColor.style.backgroundColor = sweetColors[j]
    }
  }

  createColor();

  function bobRoss () {
    var holdmypaintBrush;
    var placeholder;
    secondPointer.addEventListener('click', function () {
      // console.log('xD')
      holdmypaintBrush = event.target.style.backgroundColor
      console.log(holdmypaintBrush)

    })

    pointer.addEventListener('click', function () {
      placeholder = event.target;
      placeholder.style.backgroundColor = holdmypaintBrush;

    })

  }

  bobRoss()

})
