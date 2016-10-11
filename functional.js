'use strict';

var width = 40;
var height = 30;

var currentColor = "#09e9db";

function drawTable() {

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
  }
}

var work = false;

$(document).on("click", function(event) {
  if (event.target.parentNode.className.indexOf("column") >= 0) {

    event.target.style.backgroundColor = currentColor;
    event.target.style.border = "1px solid" + currentColor;
  }
});

$(document).on("mousedown", function (e) {

  work = true;

  $(document).on("mousemove", function(event) {
    if (event.target.parentNode.className.indexOf("column") >= 0 && work === true) {

      event.target.style.backgroundColor = currentColor;
      event.target.style.border = "1px solid" + currentColor;
    }
  });
});

$(document).on("mouseup", function(e) {

  work = false;
});

drawTable();
