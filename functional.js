'use strict';

var width = 10;
var height = 10;

$( document ).ready() {

  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {

        var daDiv = document.createElement('div');
        daDiv.id = i + ":" + j;
        document.body.appendChild(daDiv);
    }
  }
}
