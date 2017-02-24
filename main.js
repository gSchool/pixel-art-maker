var artColor = "#fff"

var paint = document.querySelector('.pallette_row')

paint.addEventListener('click', function(event){
    var targetStyle = window.getComputedStyle(event.target)
    var color = targetStyle.getPropertyValue("background-color")
    console.log(color)
    artColor = color
    console.log('current color')
    console.log(color)
    console.log('current artcolor')
    console.log(artcolor)
})
 art.addEventListener('click', function(event) {
   console.log(event.target)
   if (event.target.classList.contains('pixel')) {
     console.log('its a pixel')
     event.target.style.backgroundColor = artColor;

   }
 })
 
