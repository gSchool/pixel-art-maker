const WIDTH = 4; //64;
const HEIGHT = 4; //32;

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
    document.body.appendChild(row);
}