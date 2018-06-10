const WIDTH = 48;
const HEIGHT = 24;

// State
let brushColor = '';

// Canvas
const canvas = document.createElement('div');
canvas.className = 'canvas';
for(let y = 0; y < HEIGHT; y++) {
    const row = document.createElement('div');
    row.className = 'row';
    for(let x = 0; x < WIDTH; x++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = brushColor;
        });
        row.appendChild(pixel);
    }
    canvas.appendChild(row);
}
document.body.appendChild(canvas);

// Palette
const colors = ['red', 'blue'];
const palette = document.createElement('div');
palette.className = 'palette';
for(let color of colors) {
    const swatch = document.createElement('div');
    swatch.className = 'swatch';
    swatch.style.backgroundColor = color;
    swatch.addEventListener('click', () => {
        brushColor = color;
    });
    palette.appendChild(swatch);
}
document.body.appendChild(palette);