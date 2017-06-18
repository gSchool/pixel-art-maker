


var container = document.querySelector('.container');
var palette = document.querySelector('.lowerdiv');

var blue = document.querySelector('#mediumblue');
var red = document.querySelector('#firebrick');
var yellow = document.querySelector('#yellow');

yellow.style = 'background-color: yellow;'
blue.style = 'background-color: mediumblue;';
red.style = 'background-color: firebrick';



var yRes = 75;
var xRes = 40;

var xAxis = 4;
var yAxis = 3;
var row = document.createElement('div');
var column = document.createElement('div');

for (var i = 0; i < yRes; i++){
  for(var j = 0; j < xRes; j++){
    column.setAttribute('id',`${j},${i}`);
    column.setAttribute('class','column');
    row.appendChild(column);
    if (row.children.length === xRes){
      row.setAttribute('id',`${i}`);
      row.setAttribute('class','row');
      container.appendChild(row);
    }
    column = document.createElement('div');
  }
  row = document.createElement('div');
}

var currentColor;

palette.onclick = function (event){
  if (event.target.classList.value.includes('colors')){
    currentColor = Object.values(event.target.style)[19];
  }
};

var canvas = document.querySelector('container');

container.onclick = function (event) {
  let eventElementId = document.getElementById(event.target.id);
  let eventClass = event.target.className;
  if(eventClass.includes('column')){
    eventElementId.style.backgroundColor = currentColor;
  }
};

var drag;

container.onmousedown = function mouseState(event) {
    if (event.type == "mousedown") {
    drag = true;
    }
};

container.onmouseup = function mouseState(event) {
    if (event.type == "mouseup") {
    drag = false;
    }
};

container.onmousemove = function (event) {
  if (drag){
  let eventElementId = document.getElementById(event.target.id);
  let eventClass = event.target.className;
  if(eventClass.includes('column')){
    eventElementId.style.backgroundColor = currentColor;
  }
}
};
