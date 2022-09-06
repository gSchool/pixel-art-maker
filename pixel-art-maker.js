

// //Add an event listener to each div so when clicked the background turns red.
// function addEventListeners() {
//     var divs = document.getElementsById('square');
//            divs.addEventListener('click', () => {
//             divs.style.background = 'red';
//        })};

      // pixelFunc()

       // function pixelFunc() {
              

       //        for (let i = 0; i < 100; i++) {
       //               let container = document.createElement('container')
       //               let pixel = document.createElement('div');
       //               container.appendChild(pixel);
       //               pixel.classList.add("pixels");
       //               console.log('hello world')

       //        }

       //        let pixels = document.getElementsByClassName('pixels');
       //        console.log(pixels);
       //        for(let j = 0; j < pixels.length; j++) { 
       //               pixels[j].addEventListener("click"), function(e) {
       //                      console.log("test")
       //               }
       //        }
       // }
       pixelFunc()
       function pixelFunc() {
              for (let i = 0; i < 529; i++) {
                     let pixel = document.createElement('div');
                       container.appendChild(pixel);
                       pixel.classList.add("pixels");
              }
              let pixels = document.getElementsByClassName('pixels');
              console.log(pixels);
              for(let j = 0; j < pixels.length; j++) {
                     pixels[j].addEventListener(("click"), () => {
                            console.log("test");
                     });
              }
       }

       

//  var redOn = false
// let stopButton = document.getElementById('stopButton');
// let stopLight = document.getElementById('stopLight');
//   // add event listener to detect a click event for the stop button
//   stopButton.addEventListener('click', () => {
//        if (redOn === false) {
//          stopLight.style.background = "red"; 
//           return redOn = true;
//        } else {
//          stopLight.style.background = "black";
//          return redOn = false;
//        }
//   });
//Create a small palette of two colors (e.g. red and blue) below the canvas using more div tags.
//Add an event listener to these div tags so when clicked the brush color is saved.
//Expand the dimensions of the pixel canvas.
// Expand the palette with more colors. (i.e. red, orange, yellow, green, blue, purple, brown, gray, black, white, etc.)
// Expand the palette with a brush color indicator.
// Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!