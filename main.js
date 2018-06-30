var gridRow = 25;
var gridColumn = 25;
const BOXSIZE = 15;
var colorPick = "#ffffff";
var paintOn = false;


//select your color
var colors = document.querySelector('.palette')
colors.addEventListener('click', function(event){
  //console.log(event.target)
  if(event.target.classList.contains('colorBlock')){
    colorPick = event.target.style.backgroundColor;
    document.querySelector('.colorSelect').style.backgroundColor = colorPick;
  }
})

// document.addEventListener('mousedown', mouseDownHandler, false);
// document.addEventListener('mouseup', mouseUpHandler, false);


//pencil a square with selected color
var container = document.querySelector('.canvasBox');
container.addEventListener('click', function(event){
  //console.log(event.target)
  if(event.target.classList.contains('grid')){
    event.target.style.backgroundColor = colorPick;
  }
})

document.querySelector('#buttonPaint').addEventListener('click', function(){
  if(paintOn){
    paintOn = false;
    document.querySelector('#textPaint').textContent ='Paintbrush: off'
  } else {
    paintOn = true;
    document.querySelector('#textPaint').textContent='Paintbrush: on'
  }
})

container.addEventListener('mouseover', function(event){
  if(paintOn && mouseState == "down"){
    if(event.target.classList.contains('grid')){
      event.target.style.backgroundColor = colorPick;
    }
  }
})



//resize Canvas with user inputs
document.querySelector('#buttonResize').addEventListener('click', function(){
    container.innerHTML = "";
    gridRow = document.querySelector('#inputRow').value;
    gridColumn = document.querySelector('#inputColumn').value;
    drawGrid();
})

//draw canvas grid
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

//mouse states **not my code**
document.onmousedown = mouseDown;
document.onmouseup   = mouseUp;
var mouseState = "up";
function mouseDown(ev) {
    mouseState = "down";
}
function mouseUp(ev) {
    mouseState = "up";
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
