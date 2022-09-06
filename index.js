let canvas = document.getElementById('canvas');
let clickedColor = 'white';
let colorBoard = document.getElementById('colorBoard');
let arrayOfColors = Object.values(colorBoard.getElementsByClassName('color'));
let drag = false;
let savedPainting = { };
function makeDivs(){
    let pix = document.createElement('div');
    pix.className = 'pixel';
    return pix;
}
for (var i = 0; i < 8192; i++){
    var makePix = makeDivs();
    canvas.append(makePix);
}
document.addEventListener('click', (e) => {
    if (e.target.className === 'color'){ 
        clickedColor = e.target.style.backgroundColor;
        arrayOfColors.forEach((i)=>{
            if (clickedColor === i.style.backgroundColor){
                i.style.border = '3px solid white';
            } else {
                i.style.border = '';
            }
        })
    } else if (e.target.className === "pixel") {
        e.target.style.backgroundColor = clickedColor;
    }
})
canvas.addEventListener('mousedown', (e) => {
    drag = true;
})
canvas.addEventListener('mouseup', (e) => {
    drag = false;
})
document.addEventListener('mouseover', (e) => {
    if (e.target.parentNode !== canvas){
        drag = false;
    }
    if (drag && e.target.className === 'pixel'){
        e.target.style.backgroundColor = clickedColor;
    }
})

function save(){
var children = canvas.children;
var colors = [];
    for(let i = 0; i < children.length; i++){
colors.push(children[i].style.backgroundColor);
}
console.log(colors.join(', '))
localStorage.setItem('savedPainting', colors.join(','));
}

function clearPage(){
    var children = canvas.children;
    console.log('llll');
    for(let i = 0; i < children.length; i++){
        console.log(children[i].style.backgroundColor);
        children[i].style.backgroundColor = 'black';
    }
}

function load(){
    var children = canvas.children;
    var colors = localStorage.getItem('savedPainting');
    console.log(colors);
    colors = colors.split(',');

    for(let i = 0; i < children.length; i++){
        if (colors[i].length < 1){

        }else {
        children[i].style.backgroundColor = colors[i];
        }
console.log('loaded');
}
localStorage.removeItem('savedPainting');
}