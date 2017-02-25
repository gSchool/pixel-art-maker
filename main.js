var gridSize = 20;
var boxSize = 25;
var colorPick = "#ffffff";

//select your color
var colors = document.querySelector('.palette')
colors.addEventListener('click', function(event){
  //console.log(event.target)
  if(event.target.classList.contains('colorBlock')){
    colorPick = event.target.style.backgroundColor;
  }
})

//paint a square
var container = document.querySelector('.canvasBox');
container.addEventListener('click', function(event){
  //console.log(event.target)
  if(event.target.classList.contains('grid')){
    event.target.style.backgroundColor = colorPick;
  }
})

//draw grid
container.style.width = (gridSize * boxSize + (gridSize*2))+"px";
container.style.height = (gridSize * boxSize + (gridSize*2)) +"px";

for(let i=0; i <gridSize*gridSize; i++){
  let gridBox = document.createElement('div');
  gridBox.className = 'grid'
  gridBox.style.width = boxSize + "px";
  gridBox.style.height = boxSize + "px";
  container.appendChild(gridBox)
}

// //Blue
// var paletteBlue = document.querySelector("#blue");
// paletteBlue.addEventListener("click", function(){
//   color = "#2462ab";
//   console.log("blue");
// })
// //Red
// var paletteRed = document.querySelector("#red");
// paletteRed.addEventListener("click", function(){
//   color = "#e32020";
//   console.log("red");
// })

// //My first attempt at adding click function for each grid box
// var gridBoxes = document.getElementsByClassName('grid');
// for (let i = 0; i <gridBoxes.length; i++){
//   document.getElementsByClassName('grid')[i].addEventListener( 'click', function() {
//     document.getElementsByClassName('grid')[i].style.backgroundColor = color;
//   })
// }
