"use strict";
//build my background
document.body.style.minWidth = "1200px";
document.body.style.fontSize = "0";
var background = document.createElement("div");
background.style.width = "650px";
background.style.height = "850px";
background.style.backgroundColor = "grey";
background.style.margin = "100px auto";
background.style.position = "relative";
document.body.appendChild(background);
var canvas = document.createElement("div");

//build my canvas
canvas.style.position ="absolute";
canvas.style.top ="25px";
canvas.style.bottom ="225px";
canvas.style.right ="25px";
canvas.style.left ="25px";
canvas.style.backgroundColor ="white";
background.appendChild(canvas);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);

//build my pixels
var pixel = {}
for(var i = 0; i < 2500; i++){
  pixel[i] = document.createElement("div");
  pixel[i].style.display = "inline-block";
  pixel[i].style.boxSizing = "border-box";
  pixel[i].style.width = "12px";
  pixel[i].style.height = "12px";
  pixel[i].style.borderTop = "1px solid grey";
  pixel[i].style.borderLeft = "1px solid grey";
  pixel[i].setAttribute("id", "p"+i);
  if((i+1) % 50 === 0){
    pixel[i].style.borderRight = "1px solid grey";
  }
  if(i>=2450){
    pixel[i].style.borderBottom = "1px solid grey";
  }
  pixel[i].addEventListener("mousedown", changeColor);
  pixel[i].addEventListener("mousedown", borderDelete);
  canvas.appendChild(pixel[i]);
}

//build space for my pallete
var pallete = document.createElement("div");
pallete.style.position = "absolute";
pallete.style.backgroundColor = "#E0DEDE";
pallete.style.bottom = "25px";
pallete.style.right = "25px";
pallete.style.left = "25px";
pallete.style.top = "650px";
background.appendChild(pallete);

//build my pallete
var palleteHeader = document.createElement("div");
palleteHeader.innerHTML = "Pick a Color";
palleteHeader.style.width = "580px";
palleteHeader.style.fontSize = "20px";
palleteHeader.style.display = "block";
palleteHeader.style.backgroundColor = "white";
palleteHeader.style.margin = "10px auto";
palleteHeader.style.textAlign = "center";
pallete.appendChild(palleteHeader);

var palletePicker = document.createElement("div");
palletePicker.style.height = "112px";
palletePicker.style.width = "427px";
palletePicker.style.position = "absolute";
palletePicker.style.bottom = "10px";
palletePicker.style.left = "10px";
palletePicker.style.backgroundColor = "white";
palletePicker.style.paddingTop = "5px";
palletePicker.style.paddingBottom = "5px";
palletePicker.style.paddingRight = "1px";
palletePicker.style.paddingLeft = "2px";
pallete.appendChild(palletePicker);
var colorBox = {};
for(var i = 0; i <14; i++){
  colorBox[i] = document.createElement("div");
  colorBox[i].style.boxSizing = "border-box";
  colorBox[i].style.border = "1px solid grey";
  colorBox[i].style.height = "46px";
  colorBox[i].style.width = "46px";
  colorBox[i].style.margin = "5px 8px 5px 7px ";
  colorBox[i].style.display = "inline-block";
  colorBox[i].style.backgroundColor = "lightblue";
  colorBox[i].addEventListener('click', colorPick);
  palletePicker.appendChild(colorBox[i]);
}
colorBox[0].style.backgroundColor = "white";
colorBox[1].style.backgroundColor = "#FCFF00";
colorBox[2].style.backgroundColor = "#FFDE00";
colorBox[3].style.backgroundColor = "#FFB900";
colorBox[4].style.backgroundColor = "#FF7900";
colorBox[5].style.backgroundColor = "#FE0000";
colorBox[6].style.backgroundColor = "#BF0199";
colorBox[7].style.backgroundColor = "black";
colorBox[8].style.backgroundColor = "#D2FF00";
colorBox[9].style.backgroundColor = "#05C001";
colorBox[10].style.backgroundColor = "#00C0A7";
colorBox[11].style.backgroundColor = "#0600FF";
colorBox[12].style.backgroundColor = "#6700BF";
colorBox[13].style.backgroundColor = "#9500C0";

var colorPicked = "black";

var currentColor = document.createElement("div");
currentColor.style.height = "122px";
currentColor.style.width = "140px";
currentColor.style.position = "absolute";
currentColor.style.bottom = "10px";
currentColor.style.right = "10px";
currentColor.style.backgroundColor = "white";
pallete.appendChild(currentColor);

var currentBox = document.createElement("div");
currentBox.style.boxSizing = "border-box";
currentBox.style.border = "1px solid grey";
currentBox.style.height = "80px";
currentBox.style.width = "80px";
currentBox.style.margin = "10px 30px 5px 30px";
currentBox.style.display = "inline-block";
currentBox.style.backgroundColor = "black";
currentColor.appendChild(currentBox);
var currentText = document.createElement("div");
currentText.innerText = "Color Picked";
currentText.style.backgroundColor = "white";
currentText.style.fontSize = "20px";
currentText.style.textAlign = "center";
currentColor.appendChild(currentText);
//write script to change pixel color
function changeColor(){
  this.style.backgroundColor = colorPicked;
}
//write script to pick pixel color
function colorPick(){
colorPicked = this.style.backgroundColor;
currentBox.style.backgroundColor = colorPicked;
}

//write function to elimnate border
function borderDelete(event){
  var topNeighbor = pixel[Number(event.target.id.slice(1)) - 50];
  var bottomNeighbor = pixel[String(Number(event.target.id.slice(1)) + 50)];
  var leftNeighbor = pixel[String(Number(event.target.id.slice(1)) - 1)];
  var rightNeighbor = pixel[String(Number(event.target.id.slice(1)) + 1)];
  console.log(leftNeighbor);
  if(topNeighbor !== undefined){
    if(event.target.style.backgroundColor === topNeighbor.style.backgroundColor){
      event.target.style.borderTop = "0";
    }else{
      event.target.style.borderTop = "1px solid grey";
    }
  }
  if(leftNeighbor !== undefined){
    if(event.target.style.backgroundColor === leftNeighbor.style.backgroundColor){
      event.target.style.borderLeft = "0";
    }else{
        event.target.style.borderLeft = "1px solid grey";
    }
  }
  if(bottomNeighbor !== undefined){
    if(event.target.style.backgroundColor === bottomNeighbor.style.backgroundColor){
      bottomNeighbor.style.borderTop = "0";
    }else{
        bottomNeighbor.style.borderTop = "1px solid grey";
    }
  }
  if(rightNeighbor !== undefined){
    if(event.target.style.backgroundColor === rightNeighbor.style.backgroundColor){
      rightNeighbor.style.borderLeft = "0";
    }else{
        rightNeighbor.style.borderLeft = "1px solid grey";
    }
  }

}


//define drag function
function mouseDown(){
  this.addEventListener("mouseover", drag);
  this.addEventListener("mouseover", borderDelete);
}
function mouseUp(){
  this.removeEventListener("mouseover", drag);
  this.removeEventListener("mouseover", borderDelete);
}
function drag(event){
  event.target.style.backgroundColor = colorPicked;
}
