'use strict';

let brushClass;

const drawCanvas = function() {
  const canvas = document.querySelector('#canvas');
  let pixel;

  for (let i = 0; i < 2013; i++) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    canvas.appendChild(pixel);
  }

  canvas.addEventListener('click', (event) => {
    if (event.target === canvas) {
      return;
    }

    event.target.classList.add(brushClass);
  });
}

const drawPalette = function() {
  const palette = document.querySelector('#palette');

  const colorClasses = [
    'carmine-red',
    'coral-red',
    'pastel-red',
    'tigers-eye-orange',
    'pastel-orange',
    'topaz-orange',
    'sandstorm-yellow',
    'lemon-yellow',
    'pastel-yellow',
    'lime-green',
    'ufo-green',
    'mint-green',
    'cerulean-blue',
    'ultramarine-blue',
    'carolina-blue',
    'purple-heart',
    'lavender-indigo',
    'bright-lavender',
    'bruise-purple',
    'heliotrope-purple',
    'lavender-magenta',
    'black-black',
    'drab-black',
    'dim-gray',
    'manatee-gray',
    'pastel-gray',
    'white-white',
    'bistre-brown',
    'noir-brown',
    'bole-brown',
    'chestnut-brown',
    'grullo-brown'
  ];

  let color;

  for (const colorClass of colorClasses) {
    color = document.createElement('div');
    color.classList.add('color', colorClass);
    palette.appendChild(color);
  }

  const heading = document.createElement('h2');
  heading.textContent = 'BRUSH COLOR >';

  const brush = document.createElement('div');
  brush.classList.add('brush');

  palette.appendChild(heading);
  palette.appendChild(brush);

  palette.addEventListener('click', (event) => {
    if (event.target === palette) {
      return;
    }

    brushClass = event.target.classList.item(1);

    brush.classList.remove(brush.classList.item(1));
    brush.classList.add(brushClass);
  });
}

drawCanvas();
drawPalette();
