'use strict';

var width = 40;
var height = 30;

var currentColor = "#09e9db";

function drawTable() {

  console.log("Called");
  for (var i = 0; i < width; i++) {

    var divRow = document.createElement('div');
    divRow.id = 'column' + i;
    divRow.className = 'columns';
    document.body.appendChild(divRow);

    for (var j = 0; j < height; j++) {

      var daDiv = document.createElement('div');
      daDiv.id = i + ":" + j;
      daDiv.className = "unSelected";

      document.getElementById('column' + i).appendChild(daDiv);
    }

    //document.getElementById('drawingBoard').appendChild(document.createElement('br'));
  }
}

$(document).on("click", function (event) {

  if (event.target.parentNode.className.indexOf("column") >= 0) {

    event.target.style.backgroundColor = currentColor;
    event.target.style.border = "1px solid" + currentColor;
  }
});

drawTable();
