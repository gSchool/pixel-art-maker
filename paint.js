let paletteColor=""; 

function createCanvas(){
    let box = document.getElementById('box');
    box.style.backgroundColor= "khaki";
    box.style.width = "500px";
    box.style.height= "500px"; 
    box.style.border= "1px solid black";

    for (i=0; i<754; i++){
      
       let square = document.createElement ('div');
       square.style.width = "15px";
       square.style.height = "15px";
       square.style.backgroundColor = "white";
       square.style.cssFloat = 'left';
       square.style.border = "1px solid black"; 

       box.appendChild(square); 
       square.classList.add('squares'); 
          
    }
        
    let squares = document.getElementsByClassName("squares");
    for (let i=0; i < squares.length; i++){
        squares[i].addEventListener('click', (e) =>{ 
           squares[i].style.backgroundColor = paletteColor; 
           });

// creating a brush stroke feature using mousemove with eventListener            
           squares[i].addEventListener('mouseenter', (e) =>{ 
            if (e.buttons === 1){
                squares[i].style.backgroundColor = paletteColor; 
            }
        });
        }
// creating new divs below the canvas set to specific colors, setting class to palette and appending to the body

    let redPalette = document.createElement ('div'); 
    redPalette.style.width = "20px";
    redPalette.style.height = "20px";
    redPalette.style.borderRadius ="50%";
    redPalette.style.backgroundColor = "red";
    redPalette.style.cssFloat = 'left';
    redPalette.style.border = "1px solid black";
    box.appendChild(redPalette);
    redPalette.classList.add('palette'); 

    let pinkPalette = document.createElement ('div'); 
    pinkPalette.style.width = "20px";
    pinkPalette.style.height = "20px";
    pinkPalette.style.borderRadius ="50%";
    pinkPalette.style.backgroundColor = "pink";
    pinkPalette.style.cssFloat = 'left';
    pinkPalette.style.border = "1px solid black";
    box.appendChild(pinkPalette);
    pinkPalette.classList.add('palette'); 

    let orangePalette = document.createElement ('div'); 
    orangePalette.style.width = "20px";
    orangePalette.style.height = "20px";
    orangePalette.style.borderRadius ="50%";
    orangePalette.style.backgroundColor = "orange";
    orangePalette.style.cssFloat = 'left';
    orangePalette.style.border = "1px solid black";
    box.appendChild(orangePalette);
    orangePalette.classList.add('palette'); 

    let yellowPalette = document.createElement ('div'); 
    yellowPalette.style.width = "20px";
    yellowPalette.style.height = "20px";
    yellowPalette.style.borderRadius ="50%";
    yellowPalette.style.backgroundColor = "yellow";
    yellowPalette.style.cssFloat = 'left';
    yellowPalette.style.border = "1px solid black";
    box.appendChild(yellowPalette);
    yellowPalette.classList.add('palette');

    let greenPalette = document.createElement ('div'); 
    greenPalette.style.width = "20px";
    greenPalette.style.height = "20px";
    greenPalette.style.borderRadius ="50%";
    greenPalette.style.backgroundColor = "green";
    greenPalette.style.cssFloat = 'left';
    greenPalette.style.border = "1px solid black";
    box.appendChild(greenPalette);
    greenPalette.classList.add('palette');  

    let bluePalette = document.createElement ('div'); 
    bluePalette.style.width = "20px";
    bluePalette.style.height = "20px";
    bluePalette.style.borderRadius ="50%";
    bluePalette.style.backgroundColor = "blue";
    bluePalette.style.cssFloat = 'left';
    bluePalette.style.border = "1px solid black";
    box.appendChild(bluePalette);
    bluePalette.classList.add('palette'); 

    let indigoPalette = document.createElement ('div'); 
    indigoPalette.style.width = "20px";
    indigoPalette.style.height = "20px";
    indigoPalette.style.borderRadius ="50%";
    indigoPalette.style.backgroundColor = "indigo";
    indigoPalette.style.cssFloat = 'left';
    indigoPalette.style.border = "1px solid black";
    box.appendChild(indigoPalette);
    indigoPalette.classList.add('palette');

    let purplePalette = document.createElement ('div'); 
    purplePalette.style.width = "20px";
    purplePalette.style.height = "20px";
    purplePalette.style.borderRadius ="50%";
    purplePalette.style.backgroundColor = "purple";
    purplePalette.style.cssFloat = 'left';
    purplePalette.style.border = "1px solid black";
    box.appendChild(purplePalette);
    purplePalette.classList.add('palette'); 

    let brownPalette = document.createElement ('div'); 
    brownPalette.style.width = "20px";
    brownPalette.style.height = "20px";
    brownPalette.style.borderRadius ="50%";
    brownPalette.style.backgroundColor = "brown";
    brownPalette.style.cssFloat = 'left';
    brownPalette.style.border = "1px solid black";
    box.appendChild(brownPalette);
    brownPalette.classList.add('palette'); 

    let grayPalette = document.createElement ('div'); 
    grayPalette.style.width = "20px";
    grayPalette.style.height = "20px";
    grayPalette.style.borderRadius ="50%";
    grayPalette.style.backgroundColor = "gray";
    grayPalette.style.cssFloat = 'left';
    grayPalette.style.border = "1px solid black";
    box.appendChild(grayPalette);
    grayPalette.classList.add('palette'); 

    let whitePalette = document.createElement ('div'); 
    whitePalette.style.width = "20px";
    whitePalette.style.height = "20px";
    whitePalette.style.borderRadius ="50%";
    whitePalette.style.backgroundColor = "white";
    whitePalette.style.cssFloat = 'left';
    whitePalette.style.border = "1px solid black";
    box.appendChild(whitePalette);
    whitePalette.classList.add('palette'); 

    let blackPalette = document.createElement ('div'); 
    blackPalette.style.width = "20px";
    blackPalette.style.height = "20px";
    blackPalette.style.borderRadius ="50%";
    blackPalette.style.backgroundColor = "black";
    blackPalette.style.cssFloat = 'left';
    blackPalette.style.border = "1px solid black";
    box.appendChild(blackPalette);
    blackPalette.classList.add('palette'); 

// add a brush indicator tab on the palette panel on the bottom of the canvas 

let colorIndicatorLabel = document.createElement ('div'); 
colorIndicatorLabel.textContent = "CURRENT COLOR >"
colorIndicatorLabel.style.width = "150px";
colorIndicatorLabel.style.height = "20px";
colorIndicatorLabel.style.backgroundColor = 'white';
colorIndicatorLabel.style.cssFloat = 'left';
colorIndicatorLabel.style.margin = "5px";
colorIndicatorLabel.style.border = "1px solid black";
box.appendChild(colorIndicatorLabel);
colorIndicatorLabel.classList.add('colorIndicator'); 


let colorIndicatorBox = document.createElement ('div'); 
colorIndicatorBox.style.width = "50px";
colorIndicatorBox.style.height = "20px";
colorIndicatorBox.style.backgroundColor = '';
colorIndicatorBox.style.cssFloat = 'left';
colorIndicatorBox.style.margin = "5px";
colorIndicatorBox.style.border = "1px solid black";
box.appendChild(colorIndicatorBox);
colorIndicatorBox.classList.add('colorIndicator'); 


    let palettes = document.getElementsByClassName("palette"); 
    for (let j=0; j < palettes.length; j++){
        palettes[j].addEventListener('click', (e) =>{
           paletteColor = palettes[j].style.backgroundColor;
            colorIndicatorBox.style.backgroundColor = paletteColor
        });
    }

// creating a brush stroke feature using mousemove with eventListener 



}


createCanvas();

