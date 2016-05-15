'use strict';

//generate the coloring board
var workSpace = document.createElement('div');
document.body.appendChild(workSpace);


function pixelator() {
var currentColor = '#000000';

//populate with pixels ; outer loop generates columns, and inner loop fills those colomns with rows
  for (var j = 0; j < 20; j ++){
    var column =  document.createElement('div');
      column.style.height = '10px';
      column.style.width = '100%';
      workSpace.appendChild(column);
      for (var i = 0; i < 40; i++) {
        var pixel = document.createElement('div');
        pixel.style.height = '10px';
        pixel.style.width = '10px';
        pixel.style.backgroundColor = "#C8E6C9";
        pixel.style.float = 'left';
        pixel.addEventListener('click', toggleColor);
        column.appendChild(pixel);
      }
}

//generate color selector buttons based on color hex up to 7 total colours
var roygbiv = ['#F44336', '#FF9800', '#FFEB3B', '#4CAF50', '#2196F3', '#3F51B5', '#9C27B0'];
var colorNames = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
for (var l = 0; l < 7; l ++){
  var button = document.createElement('button');
    button.style.backgroundColor = roygbiv[l];
    button.style.color = "black";
    button.innerHTML = colorNames[l];
    button.addEventListener('click', setGlobalColor);
  document.body.appendChild(button);

}

//generate a onclick event to change colors based on which button user presses
function toggleColor(e) {
  //  console.log(e);
  e.target.style.backgroundColor = currentColor;
}

//this function sets the event handler for pixels to be backgroundColor of the button I mash
function setGlobalColor(e){
  currentColor = e.target.style.backgroundColor;
}

toggleColor();
}


pixelator();
