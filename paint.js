var app = document.querySelector('.app');

var Client = {
   HEIGHT: document.documentElement.clientHeight,
   WIDTH: document.documentElement.clientWidth
}


var pixels = [];
var baseColors = [];
var Current_Color = "#000000";

var Canvas_Options = {
   color: {
      current: "#000000",
      previous: "#000000"
   },
   setCurrentColor: function(color) {
      this.color.current = color;
   },
   eraserMode: false,
   setEraserMode: function() {
      this.eraserMode = !this.eraserMode;
   },
   brushSize: 1
}


const COLORS = {
   BW: [
      "#FFFFFF", "#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD",
      "#9E9E9E", "#757575", "#616161", "#424242", "#212121", "#000000"
   ],
   BROWN: [
      "#EFEBE9", "#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63",
      "#795548", "#6D4C41", "#5D4037", "#4E342E", "#3E2723"
   ],
   ORANGE: [
      "#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726",
      "#FF9800", "#FB8C00", "#F57C00", "#EF6C00", "#E65100"
   ],
   YELLOW: [
      "#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58",
      "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825", "#F57F17"
   ],
   GREEN: [
      "#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A",
      "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20"
   ],
   BLUE: [
      "#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5",
      "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1"
   ],
   PURPLE: [
      "#EDE7F6", "#D1C4E9", "#B39DDB", "#9575CD", "#7E57C2",
      "#673AB7", "#5E35B1", "#512DA8", "#4527A0", "#311B92"
   ],
   PINK: [
      "#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A",
      "#E91E63", "#D81B60", "#C2185B", "#AD1457", "#880E4F"
   ],
   RED: [
      "#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350",
      "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C"
   ]

}


//main app styling
   document.body.style.margin = '0';
   document.body.style.height = '100%';
   document.body.style.width = '100%';
   document.body.style.top = 0;
   document.body.style.right = 0;
   document.body.style.bottom = 0;
   document.body.style.left = 0;
   app.style.height = '100%';
   app.style.width = '100%';
   app.style.backgroundColor = 'rgba(201, 201, 201, 0.6)';
   app.style.position = "fixed"; //don't need page to scroll
   // app.style.cursor = "pointer";


//canvas
var canvas = document.createElement('div');
   canvas.className = 'paint-canvas';
   canvas.style.height = "602px";
   canvas.style.width = "602px";
   canvas.style.position = "absolute";
   canvas.style.top = "50%";
   canvas.style.left = "40%";
   canvas.style.margin = "-300px 0 0 -300px";
   canvas.style.border = "solid 1px black";
   canvas.style.cursor = "pointer";

   initializeCanvas(); //creates pixel elements


//settings panel
var settingsPanel = document.createElement('div');
   settingsPanel.className = 'settings-panel';
   settingsPanel.style.height = "100vh";
   settingsPanel.style.width = (Client.WIDTH * 0.20) + "px";
   settingsPanel.style.right = "0";
   settingsPanel.style.backgroundColor = "rgba(107, 107, 107, 0.80)";
   settingsPanel.style.position = "fixed";
   settingsPanel.addEventListener('click', function(e){
      console.log("e: ", e.target);
      if (e.target.className !== "base-color") {
         removeExistingColorPalette();
      }
   });

   //add title bar to settings panel
   var spTitleBox = document.createElement('div');
      spTitleBox.className = 'sp title-box';
      spTitleBox.style.width = '100%';
      spTitleBox.style.textAlign = 'center';
      //add header text to bar
      var spTitle = document.createElement('h2');
         spTitle.className = 'sp title';
         spTitle.innerHTML = "Tools";
   //add settings title to panel
   spTitleBox.appendChild(spTitle);
   settingsPanel.appendChild(spTitleBox);

   //add settings content to panel
   var spContent = document.createElement('div');
      spContent.className = "tools-content";
      spContent.style.height = "100%";
      spContent.style.width = "100%";
      spContent.style.backgroundColor = "#222";

   //box to show current color in use
   var spContent_CurrentColor = document.createElement('div');
      spContent_CurrentColor.className = "current-color";
      spContent_CurrentColor.style.width = "100%";
      spContent_CurrentColor.style.height = "25px";
      var spContent_CurrentColor_box = document.createElement('div');
         spContent_CurrentColor_box.className = "current-color-box";
         spContent_CurrentColor_box.id = "current-color";
         spContent_CurrentColor_box.style.height = "100%";
         spContent_CurrentColor_box.style.width = "100%";
         // spContent_CurrentColor_box.style.backgroundColor = Current_Color;
         spContent_CurrentColor_box.style.backgroundColor = Canvas_Options.color.current;
   spContent_CurrentColor.appendChild(spContent_CurrentColor_box);
   settingsPanel.appendChild(spContent_CurrentColor);


   //box for base color palette
   var spContent_baseColorBox = document.createElement('div');
   spContent_baseColorBox.className = "base-color-box";
   spContent_baseColorBox.style.height = "256px";
   spContent_baseColorBox.style.width = "100%";


   //set up base color palette
   spContent.appendChild(spContent_baseColorBox);
   initializeColors();


   //Constant Tool Settings
   const TOOL = {
      HEIGHT: "50px",
      WIDTH: "50px",
      COLOR: "WHITE",
      SIZE: "35px"
   }
   //box for main tools
   var spContent_toolBox = document.createElement('div');
   spContent_toolBox.className = "tool-box";
   spContent_toolBox.style.height = "256px";
   spContent_toolBox.style.width = "100%";

      //eraser tool
      var tool_eraser = document.createElement('i');
         tool_eraser.className = "fa fa-eraser";
         // tool_eraser.style.height = TOOL.HEIGHT;
         // tool_eraser.style.width = TOOL.WIDTH;
         tool_eraser.style.margin = "17px";
         tool_eraser.style.float = "left";
         tool_eraser.style.fontSize = TOOL.SIZE;
         tool_eraser.style.color = TOOL.COLOR;
         tool_eraser.addEventListener('click', function(e) {
            setCurrentColor(e, "transparent");
            Canvas_Options.setEraserMode();
         });

      //save tool //TODO!!!
      var tool_save = document.createElement('i');
         tool_save.className = "fa fa-floppy-o";
         // tool_save.style.height = TOOL.HEIGHT;
         // tool_save.style.width = TOOL.WIDTH;
         tool_save.style.margin = "17px";
         tool_save.style.float = "left";
         tool_save.style.fontSize = TOOL.SIZE;
         tool_save.style.color = TOOL.COLOR;
         tool_save.addEventListener('click', function(e) {
            // setCurrentColor(e, "transparent");
            // Canvas_Options.setEraserMode();
            // save();
            // TODO!
         });

      var tool_brushSize = document.createElement('i');
         tool_brushSize.className = "fa fa-paint-brush";
         // tool_brushSize.style.height = TOOL.HEIGHT;
         // tool_brushSize.style.width = TOOL.WIDTH;
         tool_brushSize.style.margin = "17px";
         tool_brushSize.style.float = "left";
         tool_brushSize.style.fontSize = TOOL.SIZE;
         tool_brushSize.style.color = TOOL.COLOR;
         tool_brushSize.innerHTML = Canvas_Options.brushSize;
         tool_brushSize.addEventListener('click', function(e) {
            //FIXME: Make this better
            if (Canvas_Options.brushSize === 1) {
               Canvas_Options.brushSize = 4;
            } else Canvas_Options.brushSize = 1;
            tool_brushSize.innerHTML = Canvas_Options.brushSize;
         });


   //append tools to toolbox
   spContent_toolBox.appendChild(tool_eraser);
   spContent_toolBox.appendChild(tool_brushSize);
   spContent_toolBox.appendChild(tool_save);

   spContent.appendChild(spContent_toolBox);


   //add content section to settings panel
   //includes color selection & tools, etc.
   settingsPanel.appendChild(spContent);



//add canvas to app
app.appendChild(canvas);
//add settings panel to app
app.appendChild(settingsPanel);




function initializeCanvas() {
   for (var row = 0; row < 60; row++) {
      for (var col = 0; col < 60; col++) {
         var pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.style.float = 'left';
            pixel.style.height = "10px";
            pixel.style.width = "10px";
            pixel.style.border = "0.1px solid rgba(0, 0, 0, 0.1)";
            pixel.addEventListener('mouseover', function() {
               this.style.borderColor = "rgba(0, 0, 0, 0.5)"
            });
            pixel.addEventListener('mouseout', function() {
               this.style.borderColor = "rgba(0, 0, 0, 0.1)"
            });
            //allow click to change color
            pixel.addEventListener('click', handlePixelColorsChange);
            //allow click and drag event to change color
            pixel.addEventListener('mousedown', handleMouseDown);
            pixel.addEventListener('mouseup', handleMouseUp);
            pixel.COORDINATES = {
               row: row,
               col: col
            };
            pixel.FRIENDS = setFriends(pixel);
         canvas.appendChild(pixel);

         //add to pixels array for quicker bubble access
         pixels.push(pixel);
      }
   }
}

function initializeColors() {
   for (var color in COLORS) {
      //make color chooser per color type
      //*** TODO *** //FIND A WAY TO BETTER STANDARDIZE THIS!! LESS CODE!!
      // console.log("color: ", COLORS[color]);
      var baseColorChooser = document.createElement('div');
         baseColorChooser.className = 'base-color';
         baseColorChooser.style.height = "50px";
         baseColorChooser.style.width = "50px";
         baseColorChooser.style.borderRadius = "3em";
         baseColorChooser.style.margin = "17px";
         baseColorChooser.style.float = "left";
         baseColorChooser.style.backgroundColor = COLORS[color][5];
         baseColorChooser.currentColor = COLORS[color][5];
         baseColorChooser.palette = COLORS[color];
         baseColorChooser.addEventListener('click', showColorPalette);
      spContent_baseColorBox.appendChild(baseColorChooser);

      // baseColors.push(baseColorChooser);
   }
}


function showColorPalette(e) {
   //make sure that only base colors open a palette
   if (e.target.className !== "base-color") {
      return;
   }
   //find a current pallet, if it exists, otherwise null
   var currPalette = document.querySelector('#individual-palette');
   //if a current pallet does exist, remove it
   if (currPalette !== null) {
      removeExistingColorPalette();
   }
   if (!e.target.children.length > 0) { //palette does not yet exist
      //create and open color palette
      var palette = document.createElement('ul');
         palette.className = "color-palette";
         palette.id = "individual-palette";
         palette.style.height = "auto";
         palette.style.width = "auto";
         palette.style.listStyle = "none";
         palette.style.right = "0";
         palette.style.position = "absolute";
         palette.style.backgroundColor = "rgba(66, 66, 66, 0.86)";
         palette.style.boxShadow = "0 0 4px #1E1E1E";

      for (var color = 0; color < e.target.palette.length; color++) {
         // console.log("curr Color in palette: ", e.target.palette[color]);
         var currColor = document.createElement('li');
            currColor.className = "current-color-in-palette";
            currColor.style.height = "50px";
            currColor.style.width = "50px";
            currColor.style.float = "left";
            currColor.style.margin = "5px";
            currColor.style.backgroundColor = e.target.palette[color];
            currColor.addEventListener('click', function(e) {
               setCurrentColor(e, e.target.style.backgroundColor);
            });
         palette.appendChild(currColor);
      }
      e.target.appendChild(palette);
   }
}


//Handle drawing on canvas
function handleMouseDown(e) {
   e.preventDefault();
   e.target.style.backgroundColor = Canvas_Options.color.current;
   for (var p = 0; p < pixels.length; p++) {
      pixels[p].addEventListener('mouseover', handlePixelColorsChange);
   }
}

function handleMouseUp(e) {
   for (var p = 0; p < pixels.length; p++) {
      pixels[p].removeEventListener('mouseover', handlePixelColorsChange);
   }
}

function setCurrentColor(e, color) {
   Canvas_Options.setCurrentColor(color);
   var cc = document.getElementById('current-color');
   cc.style.backgroundColor = color;
   if (color === "transparent") { //eraser mode
      cc.innerHTML = "ERASER";
      cc.style.textAlign = "center";
   } else {
      cc.innerHTML = "";
   }
}

function handlePixelColorsChange(e) {
   e.target.style.backgroundColor = Canvas_Options.color.current;
   switch (Canvas_Options.brushSize) {
      case 4:
         fillFour(e);
         break;
      default: //1 pixel
   }
}


function removeExistingColorPalette() {
   if (document.querySelector("#individual-palette") !== null) {
      document.querySelector("#individual-palette").remove();
   }
}


function fillGrid() {
   for (var p = 0; p < pixels.length; p++) {
      pixels[p].style.backgroundColor = Canvas_Options.color.current;
   }
}


function fillFour(e) {
   // console.log("e.target.FRIENDS: ", e.target.FRIENDS);
   var coords = e.target.COORDINATES;
   var ps = {
      c: e.target,
      r: null,
      d: null,
      dr: null
   };
   for (var p = 0; p < pixels.length; p++) {
      var pixelCoords = pixels[p].COORDINATES;
      //next pixel over
      if (pixelCoords.row === coords.row) {
         if (pixelCoords.col === coords.col + 1) {
            pixels[p].style.backgroundColor = Canvas_Options.color.current;
            ps.r = pixels[p];
         }
         if (pixelCoords.row === coords.row + 1) {
            pixels[p].style.backgroundColor = Canvas_Options.color.current;
            ps.d = pixels[p];
         }
      }
      if (pixelCoords.col === coords.col) {
         if (pixelCoords.row === coords.row + 1) {
            pixels[p].style.backgroundColor = Canvas_Options.color.current;
            ps.d = pixels[p];
         }
      }
      if (pixelCoords.col === coords.col + 1) {
         if (pixelCoords.row === coords.row + 1) {
            pixels[p].style.backgroundColor = Canvas_Options.color.current;
            ps.d = pixels[p];
         }
      }
   }
   // console.log("ps: ", ps);
}

function setFriends(pixel) {
//TODO
}

function findFriends_four() {
//TODO
}
