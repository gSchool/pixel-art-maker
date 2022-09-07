let canvas = document.getElementById('canvas')
let paintBrush = ''
let mouseIsDown = false
function square(){
    let tile = document.createElement('div');
    tile.style.width = '23px';
    tile.style.paddingBottom = '23px';
    tile.style.float = 'left';
    tile.style.border = '1px solid black';
    canvas.append(tile);
    // tile.addEventListener('click', () => {tile.classList.toggle(paintBrush)})
    tile.addEventListener('dblclick', ()=> {tile.removeAttribute('class')} )
    tile.addEventListener('mousedown', () => {tile.classList.toggle(paintBrush)
    mouseIsDown = true})
    tile.addEventListener('mouseup', () => {mouseIsDown = false})
    tile.addEventListener('mouseenter', () => {if(mouseIsDown){tile.classList.toggle(paintBrush)}})
    
} 

for (let i = 0; i < 640; i++){
        square()
}


let redPaintBrush = document.getElementById('redButton')
redPaintBrush.addEventListener('click', () => {paintBrush = 'red'})

let bluePaintBrush = document.getElementById('blueButton')
bluePaintBrush.addEventListener('click', () => {paintBrush = 'blue'})

let orangePaintBrush = document.getElementById('orangeButton')
orangePaintBrush.addEventListener('click', () => {paintBrush = 'orange'})

let yellowPaintBrush = document.getElementById('yellowButton')
yellowPaintBrush.addEventListener('click', () => {paintBrush = 'yellow'})

let greenPaintBrush = document.getElementById('greenButton')
greenPaintBrush.addEventListener('click', () => {paintBrush = 'green'})

let purplePaintBrush = document.getElementById('purpleButton')
purplePaintBrush.addEventListener('click', () => {paintBrush = 'purple'})

let brownPaintBrush = document.getElementById('brownButton')
brownPaintBrush.addEventListener('click', () => {paintBrush = 'brown'})

let blackPaintBrush = document.getElementById('blackButton')
blackPaintBrush.addEventListener('click', () => {paintBrush = 'black'})

let grayPaintBrush = document.getElementById('grayButton')
grayPaintBrush.addEventListener('click', () => {paintBrush = 'gray'})


let paintBrushIndicator = document.getElementById('currentColor');
window.addEventListener('click', () => {
    paintBrushIndicator.style.background = paintBrush
    if (paintBrush === 'purple' || paintBrush === 'blue' || paintBrush ==='black'){
        paintBrushIndicator.classList.add('whiteText')
        paintBrushIndicator.classList.remove('blackText')
    }   else {
        paintBrushIndicator.classList.add('blackText')
        paintBrushIndicator.classList.remove('whiteText')
    }
})
