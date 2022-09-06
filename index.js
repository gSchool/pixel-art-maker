let canvas = document.getElementById('canvas');
let clickedColor = 'white';
let colorBoard = document.getElementById('colorBoard');
let arrayOfColors = Object.values(colorBoard.getElementsByClassName('color'));

function makeDivs(){
    let pix = document.createElement('div');
    pix.className = 'pixel';
    // pix.style.width = '0.5em';
    // pix.style.height = '0.5em';
    // pix.style.border = '.5px dotted #4713a3';
    // pix.style.backgroundColor = 'black';
    // pix.style.display = 'flex' ;
    // pix.style.flexWrap = 'wrap';
    return pix;
}
for (var i = 0; i < 5880; i++){
    var makePix = makeDivs();
    canvas.append(makePix);
}
canvas.addEventListener('click', (e) => {
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