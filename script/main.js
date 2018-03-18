var holdingColor = ''

document.addEventListener('DOMContentLoaded', function () {
console.log("working");

var grid = ''

//altering css? this also needs to be changed
for (var i = 0; i < 20; i++) {
  for (var j = 0; j < 20; j++) {
    grid += '<div class="cell" id="cell' + [j] + 'by' + [i] + '">'
    grid += '</div>'
  }
}
document.getElementById('bigDiv').innerHTML = grid

var chart = ''

var colorArr = ['#4286f4', '#58259e', '#c409bb', '#db0f19','#fafafa', '#000', '#e87a30', '#ffe100', '#96d811', '#048e14', '#08e0c7']

for (var i = 0; i < colorArr.length; i++) {
  chart += '<div class="circle" ' + [i] + '">'
  chart += '</div>'
}
document.getElementById('colors').innerHTML = chart

for (var i = 0; i < colorArr.length; i++) {
  document.getElementsByClassName('circle')[i].style.backgroundColor = colorArr[i]
}

var allCircles = document.getElementsByClassName('circle')

for (var i = 0; i < allCircles.length; i++) {
  allCircles[i].addEventListener('click', function () {
    holdingColor = this.style.backgroundColor
  })
}

//write nested for loops again? need to getElementById of "cell[j]by[i]"
var cellArray = document.getElementsByClassName('cell')

for (var i = 0; i < cellArray.length; i++) {
  cellArray[i].addEventListener('click', function () {
    this.style.backgroundColor = holdingColor
    this.style.outline = 'none'
  })
}

})
