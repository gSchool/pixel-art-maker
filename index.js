// function backg () {
//     let bk = document.createElement('div')
//     bk.style.backgroundColor = 'black'
//     bk.style.paddingBottom = '100%'
//     bk.style.width = '100%'
//     return bk;
// }
//<div class='palet'style="background-color: gray; padding-bottom: 20%; position: fixed; width: 70%; left: 200px; top: 100px;"></div>
// function palet () {
// let palet = document.createElement('div')
// palet.className = "palet"
// palet.style.backgroundColor = "gray"
// palet.style.zIndex = '1';
// palet.style.position = 'absolute'
// palet.style.paddingBottom = "50%"
// palet.style.width = "70%"
// palet.style.left = '260px'
// palet.style.top = '200px'
// palet.style.borderRadius = '5%'
// palet.style.zIndex = '2'
// return palet;
// }
//let palet = document.querySelector('.palet')
// function genDiv () {
//     let div = document.createElement('div');
//     div.className = "grid"
//     div.style.width = ''
//     div.style.float = 'left'
//     div.style.paddingBottom = '2'
//     div.style
//     div.style.backgroundColor = randomColor();
//     return div;
// }
//colorPalet verified to return key values as string
let colorPalet = {
    'red': document.getElementById('color red').style.backgroundColor,
    'blue': document.getElementById('color blue').style.backgroundColor,
    'colorSelect': function(){

    }
};

// console.log(colorPalet.blue);

let pixels = document.getElementsByClassName('pixel')
let brushColor1 = document.getElementsByClassName ('brushColor')

function pixel () {
    let pixel = document.createElement('div')
    pixel.className = "pixel"
    pixel.style.border = '.5px solid black'
    pixel.style.float = "left"
    pixel.style.backgroundColor = "white"
    pixel.style.paddingBottom = ".5%"
    pixel.style.width = ".5%"
    return pixel;
}
function backG (color) { 
    let pixel = e.target
    console.log(pixel.style.backgroundColor)
    if (pixel.style.backgroundColor !== color) {
        pixel.style.backgroundColor = color
    }else pixel.style.backgroundColor = 'white'
}

function brushColor (e) {
    // let brush = document.getElementsByClassName('brushColor');
    let color = e.target.style.backgroundColor
    // for(let i = 0; i < brush.length; i++){
    //     color = brush[i].target.style.backgroundColor;
    // }
    console.log(color);
    console.log(typeof color);
    return color;
}
//Create a function that selects only the background color values of the class name brushColor
//should save the brush color value to be utilized by the backG function




// console.log(pixels.className)
//pixels.addEventListener('click', backG)




for (var i = 0; i < 6600; i++) {
    document.body.appendChild(pixel());
}
//backG();
// for (var i = 0 ; i < pixels.length; i++) {
//     pixels[i].addEventListener('click' , backG) ; 
//  }
//Add event listener to parent node of pixels
document.body.addEventListener('click', backG(colorPalet.red) );
 for (var j = 0; j < brushColor1.length; j++){
 brushColor1[j].addEventListener('click' , brushColor) ; 
 }