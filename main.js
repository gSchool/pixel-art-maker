var bColor = "white"

var pallet = document.querySelector('.pallet')
console.log(pallet)
// pallet box
pallet.addEventListener('click', function(event){

    bColor = event.target.style.backgroundColor
   console.log(bColor)
    //findStyle.getPropertyValue('background-color')
  // console.log(bColor.target)

})

//pixel box
var container = document.querySelector('.pixelHolder')
container.addEventListener('click',function(event) {
  console.log(event.target)
  if (event.target.classList.contains('pixels')){
    event.target.style.backgroundColor = bColor
  }
})
