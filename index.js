const WIDTH = 4; //64;
const HEIGHT = 4; //32;

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
            pixel.style.backgroundColor = 'red';
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
    palette.appendChild(swatch);
}
document.body.appendChild(palette);