var gridRow = 25;
var gridColumn = 25;
const BOXSIZE = 15;
var colorPick = "#ffffff";

//select your color
var colors = document.querySelector('.palette')
colors.addEventListener('click', function(event){
  //console.log(event.target)
  if(event.target.classList.contains('colorBlock')){
    colorPick = event.target.style.backgroundColor;
    document.querySelector('.colorSelect').style.backgroundColor = colorPick;
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

//resize Canvas
document.querySelector('#buttonResize').addEventListener('click', function(){
    container.innerHTML = "";
    gridRow = document.querySelector('#inputRow').value;
    gridColumn = document.querySelector('#inputColumn').value;
    drawGrid();
})
function drawGrid(){
  container.style.width = (gridColumn * BOXSIZE + (gridColumn*2))+"px";
  container.style.height = (gridRow * BOXSIZE + (gridRow*2)) +"px";
  for(let i=0; i <gridColumn*gridRow; i++){
    let gridBox = document.createElement('div');
    gridBox.className = 'grid'
    gridBox.style.width = BOXSIZE + "px";
    gridBox.style.height = BOXSIZE + "px";
    container.appendChild(gridBox)
  }
}
//draw starting grid
drawGrid();


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
