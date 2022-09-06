var defaultColor = "#ff0000"
     
     
     pixelFunc()
       function pixelFunc() {
              for (let i = 0; i < 900; i++) {
                     let pixel = document.createElement('div');
                       container.appendChild(pixel);
                       pixel.classList.add("pixels");
              }
              var pixels = document.getElementsByClassName('pixels');
              console.log(pixels);
              for(let j = 0; j < pixels.length; j++) {
                     pixels[j].addEventListener(("click"), () => {
                            console.log("test");
                     });
              } 
       }
       
 var color = document.querySelector('#favcolor');      

     
       //create an event listener that changes the color of the pixel to the color of the color picker
       
       function colorFunc(){
              let pixels = document.getElementsByClassName('pixels');
        
              console.log(color);
              for(let i = 0; i < pixels.length; i++) {
                     //add a class name
                     pixels[i].addEventListener(("click"), () => {
                            pixels[i].style.backgroundColor = color.value;
                            
                            console.log("is it working?");
                     });
              }
       }
    
 /* improve the mouse so it behaves like a real paintbrush. In other words, allow the user to paint by clicking and dragging across the canvas. For this, you'll need a combination of the mousedown, mouseenter, and mouseup events.
TIP: The mouseenter event doesn't bubble up the DOM tree. */    
let draw = false;
drawFunc();
function drawFunc(){
    let pixels = document.getElementsByClassName('pixels');
console.log('we here');
    console.log(color);
    for(let i = 0; i < pixels.length; i++) {
           console.log('we over there');

           //color when i click
           pixels[i].addEventListener(("click"), () => {
            pixels[i].style.backgroundColor = color.value;
           });
           //color when i hold down and drag
           pixels[i].addEventListener('mouseover', function(){
            if(draw) return pixels[i].style.backgroundColor = color.value;
            console.log("is this working?");
        })
        pixels[i].addEventListener('mousdown', function(){
            pixels[i].style.backgroundColor = color.value
        })
    
       // container.appendChild(pixels[i])
      }
    }
// Set draw to true when the user press down the mouse
window.addEventListener("mousedown", function(){
    draw = true
})
// Set draw to false when the user release the mouse
window.addEventListener("mouseup", function(){
    draw = false
})
populateStorage();
//save everything in the container
function populateStorage() {
       localStorage.setItem('container');
       document.getElementById('container').value;
       
       setStyles();
}

//save div class pixels and updated style(all the pixels that were colored in the grid)

function setStyles(){

       const currentPixel = localStorage.getItem('pixels');
       console.log('what am i storing?');
}