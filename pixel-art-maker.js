var defaultColor = "#ff0000"
     
     
     pixelFunc()
       function pixelFunc() {
              for (let i = 0; i < 529; i++) {
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

       colorFunc();
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
       // function updateBackground( e ) {
       //        pixels[j].style.backgroundColor = e.value
       //      }
 /* mprove the mouse so it behaves like a real paintbrush. In other words, allow the user to paint by clicking and dragging across the canvas. For this, you'll need a combination of the mousedown, mouseenter, and mouseup events.
TIP: The mouseenter event doesn't bubble up the DOM tree. */    



// function onRed() {
//        document.getElementById('stopLight').style.backgroundColor = "red";