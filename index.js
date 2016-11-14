(function() {
  'use strict';

  let brushClass = 'drab-black';

  const paintPixel = function(pixel) {
    pixel.classList.remove(pixel.classList.item(1));
    pixel.classList.add(brushClass);
  }

  const drawCanvas = function() {
    const canvas = document.querySelector('#canvas');

    for (let i = 0; i < 2013; i++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      canvas.appendChild(pixel);
    }

    canvas.addEventListener('click', (event) => {
      if (event.target === canvas) {
        return;
      }

      paintPixel(event.target);
    });

    // Bonus 1 - paintbrush
    //
    // let isPainting = false;
    //
    // canvas.addEventListener('mousedown', () => {
    //   isPainting = true;
    //
    //   if (event.target === canvas) {
    //     return;
    //   }
    //
    //   paintPixel(event.target);
    // });
    //
    // document.addEventListener('mouseup', () => {
    //   isPainting = false;
    // });
    //
    // const pixels = document.querySelectorAll('.pixel');
    //
    // for (const pixel of pixels) {
    //   pixel.addEventListener('mouseenter', () => {
    //     if (isPainting) {
    //       paintPixel(event.target);
    //     }
    //   });
    // }
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

    for (const colorClass of colorClasses) {
      const color = document.createElement('div');
      color.classList.add('color', colorClass);
      palette.appendChild(color);
    }

    const heading = document.createElement('h2');
    heading.textContent = 'BRUSH COLOR >';

    const brushIndicator = document.createElement('div');
    brushIndicator.classList.add('brushIndicator', brushClass);

    palette.appendChild(heading);
    palette.appendChild(brushIndicator);

    palette.addEventListener('click', (event) => {
      if (event.target === palette) {
        return;
      }

      brushClass = event.target.classList.item(1);

      brushIndicator.classList.remove(brushIndicator.classList.item(1));
      brushIndicator.classList.add(brushClass);
    });
  }

  drawCanvas();
  drawPalette();
})();
