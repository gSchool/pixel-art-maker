'use strict';

var brush;

var drawCanvas = function() {
  var canvas = document.querySelector('#canvas');
  var pixel;

  for (var i = 0; i < 2013; i++) {
    pixel = document.createElement('div');
    pixel.className = 'pixel';
    canvas.appendChild(pixel);
  }

  canvas.addEventListener('click', function(event) {
    if (event.target.className !== 'pixel') {
      return;
    }

    event.target.style.background = brush;
    event.target.style.borderColor = brush;
  });
}

var drawPalette = function() {
  var palette = document.querySelector('#palette');

  var hexColors = [
    '#b23232',
    '#ff4848',
    '#ff6c6c',
    '#e59b40',
    '#ffad48',
    '#ffc57e',
    '#e5de40',
    '#fff748',
    '#fffa91',
    '#39cc4b',
    '#48ff5e',
    '#91ff9e',
    '#3248b2',
    '#4867ff',
    '#91a3ff',
    '#6432b2',
    '#8f48ff',
    '#bb91ff',
    '#7c2b99',
    '#cf48ff',
    '#e291ff',
    '#000000',
    '#323232',
    '#666666',
    '#999999',
    '#cccccc',
    '#ffffff',
    '#3a2119',
    '#512e23',
    '#754233',
    '#90675b',
    '#ac8d84'
  ];

  var color;

  for (var hexColor of hexColors) {
    color = document.createElement('div');
    color.className = 'color';
    color.style.background = hexColor;
    palette.appendChild(color);
  }

  var selection = document.createElement('div');
  selection.className = 'selection';

  var heading = document.createElement('h2');
  heading.textContent = 'CURRENT COLOR >';

  var current = document.createElement('div');
  current.className = 'current';

  selection.appendChild(heading);
  selection.appendChild(current);
  palette.appendChild(selection);

  palette.addEventListener('click', function(event) {
    if (event.target.className !== 'color') {
      return;
    }

    brush = event.target.style.background;
    current.style.background = brush;
  });
}

drawCanvas();
drawPalette();
