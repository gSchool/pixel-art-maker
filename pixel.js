pixelFunc()
var color = "red"

function pixelFunc() {
let box = document.getElementById('box') 
    for (let i = 0; i < 1600; i++) {
    let pixel = document.createElement('div');
    box.appendChild(pixel)
    pixel.classList.add("pixels");
}
var colorPalette = document.getElementById('colorPalette')
var palette = colorPalette.childNodes

 
var item1 = palette.item(1)
var colorPicker = document.getElementById('colorPicker')
colorPicker.addEventListener("input", watchColorPicker);
colorPicker.addEventListener("change", watchColorPicker);
function watchColorPicker(event) {
  
    color = event.target.value;
  };
}


let pixels = document.getElementsByClassName('pixels');
console.log(pixels);



for ( let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("mousedown", function(e) {
    pixels[i].style.backgroundColor = color
   
    });

}
// for ( let i = 0; i < pixels.length; i++) {
    

    
//     pixels[i].addEventListener("mouseenter", function(e) {
//         pixels[i].style.backgroundColor = color
       
//         });
    
//     }

//on mouse down, loop starts, on mouseenter loop continues, on mouseup, loop stops










