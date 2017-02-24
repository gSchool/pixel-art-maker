var grid = document.querySelector('.grid')



var newColor = "color"
var colorButton =

 document.querySelector('.colorPalet')

   colorButton.addEventListener('click', function(event) {
    var colorChanger = window.getComputedStyle(event.target)
     var color = colorChanger.getPropertyValue("background-color")
    console.log(color)
    newColor = color
  })

  grid.addEventListener ('click', function(event){
    console.log(event.target)
    if (event.target.classList.contains('cell'))
      // event.target.classList.toggle('lightSkyBlue')
      event.target.style.backgroundColor=newColor
  })




  //  if(event.target.classList.contains('cell')) {
  //    event.target.style.background-color('color')
