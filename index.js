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
const pixels = [];
for(let y = 0; y < HEIGHT; y++) {
    const pxRow = [];
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
        pxRow.push(pixel);
    }
    canvas.appendChild(row);
    pixels.push(pxRow);
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

// File reader
/*
<input type='file' id='fileinput'>
<input type='button' id='btnLoad' value='Load' onclick='loadFile();'>
 */
const fileDiv = document.createElement('div');
const fileInput = document.createElement('input');
fileInput.setAttribute('type', 'file');
fileDiv.appendChild(fileInput);
const btnLoad = document.createElement('input');
btnLoad.setAttribute('type', 'button');
btnLoad.setAttribute('value', 'Load');
btnLoad.addEventListener('click', () => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.setAttribute('visibility', 'hidden');
            canvas.width = img.width;
            canvas.height = img.height;
            document.body.appendChild(canvas);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, img.width, img.height);
            for(let y = 0; y < img.height / 16; y++) {
                for(let x = 0; x < img.width / 16; x++) {
                    const p = ctx.getImageData(x * 16 + 8, y * 16 + 8, 1, 1).data;
                    const hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
                    if(y >= pixels.length) continue;
                    if(x >= pixels[y].length) continue;
                    pixels[y][x].style.backgroundColor = hex;
                }
            }
            document.body.removeChild(canvas);
        };
        img.src = reader.result;
    }, false);
    reader.readAsDataURL(fileInput.files[0]);
});
fileDiv.appendChild(btnLoad);

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

document.body.appendChild(container);
document.body.appendChild(fileDiv);
