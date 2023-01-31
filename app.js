console.log("app.js begin");

const NUM_PIXELS_IN_ROW = 44;
const NUM_PIXELS_COLUMN = 26;
const PIXEL_WIDTH = 40;

// get reference to grid holder
const canvas = document.querySelector('.canvas');
const controls = document.querySelector('.controls');


canvas.style.width = PIXEL_WIDTH * NUM_PIXELS_IN_ROW + "px"; 

for (let i=0; i < NUM_PIXELS_IN_ROW*NUM_PIXELS_COLUMN; i++){
    const pixel = document.createElement('button');
    // style pixels in the canvas with a .pixel class
    pixel.className = 'pixel';
    pixel.style.width = PIXEL_WIDTH + "px";
    pixel.style.height = PIXEL_WIDTH + "px";
    canvas.append(pixel);
}

let colorSelection;

const pixels = document.querySelectorAll('.pixel');
for (pixel of pixels){
    console.log("creating event listener for pixel: " + pixel);
    pixel.addEventListener('click', (event) => {
        const clicked = event.target;
        clicked.style.background = colorSelection;
        clicked.style.borderColor = colorSelection;
    });
}

let colorPalette = ['Crimson','DarkRed','DarkSalmon','FireBrick','IndianRed','LightCoral','LightSalmon',
'Red','Salmon','DeepPink','HotPink','LightPink','MediumVioletRed','PaleVioletRed','Pink','Coral','DarkOrange',
'Gold','Orange','OrangeRed','Tomato','Bisque','BlanchedAlmond','Brown','Burlywood','Chocolate','Cornsilk',
'DarkGoldenrod','Goldenrod','Maroon','Peru','RosyBrown','SaddleBrown','SandyBrown','Sienna','Tan','Wheat',
'DarkKhaki','Khaki','LemonChiffon','LightGoldenrodYellow','LightYellow','Moccasin','PaleGoldenrod','PapayaWhip',
'PeachPuff','Yellow','Chartreuse','DarkGreen','DarkOliveGreen','DarkSeaGreen','ForestGreen','Green','GreenYellow',
'LawnGreen','LightGreen','Lime','LimeGreen','MediumSeaGreen','MediumSpringGreen','Olive','OliveDrab',
'PaleGreen','SeaGreen','SpringGreen','YellowGreen','Aqua','Aquamarine','DarkTurquoise','LightSeaGreen',
'MediumAquamarine','MediumTurquoise','PaleTurquoise','Turquoise','CadetBlue','Cyan','DarkCyan','LightCyan',
'Teal','Blue','BlueViolet','CornflowerBlue','DarkBlue','DeepSkyBlue','DodgerBlue','LightBlue','LightSkyBlue',
'LightSteelBlue','MediumBlue','MidnightBlue','Navy','PowderBlue','RoyalBlue','SkyBlue','SteelBlue',
'DarkMagenta','DarkOrchid','DarkSlateBlue','DarkViolet','Fuchsia','Indigo','Lavender','Magenta','MediumOrchid',
'MediumPurple','MediumSlateBlue','Orchid','Plum','Purple','RebeccaPurple','SlateBlue','Thistle','Violet',
'AliceBlue','AntiqueWhite','Azure','Beige','DarkGray','DarkSlateGray','DimGray','FloralWhite','Gainsboro',
'GhostWhite','Gray','Honeydew','Ivory','LavenderBlush','LightGray','LightSlateGray','Linen','MintCream',
'MistyRose','NavajoWhite','OldLace','Seashell','Silver','SlateGray','Snow','White','Whitesmoke','Black',
'White']
// make palette - start with 1 color
for (let i = 0; i < 142; i++) {
    const colorChoice = document.createElement('div');
    colorChoice.className = 'color-picker';
    colorChoice.style.background = colorPalette[i];
    controls.append(colorChoice);
    colorChoice.addEventListener('click', (event)=>{
        colorSelection = colorPalette[i];
        console.log(`picked ${colorPalette[i]}`);
        brushIndicator.textContent = `Brush color is: ${colorSelection}`
        if (colorPalette[i] == 'black') {
            brushIndicator.style.webkitTextFillColor = 'white';
        } else {
            brushIndicator.style.webkitTextFillColor = "black";
        }
        brushIndicator.style.backgroundColor = colorSelection;
    })
}

const brushIndicator = document.createElement('div');
brushIndicator.className = 'brush-indicator';
controls.append(brushIndicator);
if (colorSelection == 'black') {
    brushIndicator.style.textEmphasisColor = 'white';
}

