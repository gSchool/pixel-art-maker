var colorSelected = document.querySelector('.colorSelected')


var newColor = "color"

var colorButton = document.querySelector('.colorPalet')
   colorButton.addEventListener('click', function(event) {
    var colorChanger = window.getComputedStyle(event.target)
     var color = colorChanger.getPropertyValue("background-color")
    console.log(color)
    newColor = color
    colorSelected.style.backgroundColor= newColor
  })

  var storeGridSize = 1
  var gridCanvas = ""

var submit =document.querySelector(".submit")
submit.addEventListener("click", function(event){
  var theResult = document.getElementById("theResult").value
  storeGridSize = theResult
  gridCanvas = storeGridSize*storeGridSize
  

  var grid = document.querySelector('.grid')
  grid.style.width = (storeGridSize*26)+"px"
  console.log("whats current grid size")
  console.log(storeGridSize)
  grid.addEventListener ('click', function(event){
    console.log(event.target)
    if (event.target.classList.contains('cell'))
      // event.target.classList.toggle('lightSkyBlue')
      event.target.style.backgroundColor=newColor
  })


  for (var i = 1; i <= gridCanvas; i++) {
    var newCell = document.createElement('div')
    newCell.classList.add('cell')
    // newCell.textContent = i+8
    grid.appendChild(newCell)
  }
})





  //  if(event.target.classList.contains('cell')) {
  //    event.target.style.background-color('color')
