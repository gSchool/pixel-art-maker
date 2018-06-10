const WIDTH = 48;
const HEIGHT = 24;

// State
let brushColor = '';
let mouseDown = false;
document.body.addEventListener('mouseup', () => mouseDown = false);
document.body.addEventListener('mouseenter', () => mouseDown = false);

// Container
const container = document.createElement('div');
container.className = 'container';
container.style.width = `${WIDTH * 16}px`;

// Canvas
const canvas = document.createElement('div');
canvas.className = 'canvas';
canvas.addEventListener('mousedown', () => mouseDown = true);
for(let y = 0; y < HEIGHT; y++) {
    const row = document.createElement('div');
    row.className = 'row';
    for(let x = 0; x < WIDTH; x++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.addEventListener('click', () => pixel.style.backgroundColor = brushColor);
        pixel.addEventListener('mouseover', () => {
            if(!mouseDown) return;
            pixel.style.backgroundColor = brushColor;
        });
        row.appendChild(pixel);
    }
    canvas.appendChild(row);
}
container.appendChild(canvas);

// Palette
const colors = ['#b23232', '#ff4848', '#ff6c6c', '#e59b40', '#ffad48', '#ffc57e', '#e5de40', '#fff748', '#fffa91', '#39cc4b', '#48ff5e', '#91ff9e', '#3248b2', '#4867ff', '#91a3ff', '#6432b2', '#8f48ff', '#bb91ff', '#7c2b99', '#cf48ff', '#e291ff', '#000000', '#323232', '#666666', '#999999', '#cccccc', '#ffffff', '#3a2119', '#512e23', '#754233', '#90675b', '#ac8d84'];
const palette = document.createElement('div');
palette.className = 'palette';
for(let color of colors) {
    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = color;
    swatch.addEventListener('click', () => {
        brushColor = color;
        title.style.backgroundColor = color;
    });
    palette.appendChild(swatch);
}
const title = document.createElement('h2');
title.innerText = 'BRUSH COLOR';
palette.appendChild(title);
container.appendChild(palette);

document.body.appendChild(container);