document.addEventListener('DOMContentLoaded', function () {
  let width=60;
  let height=30;
  let color ="";
  //get the body for the palette
  var palette = document.querySelector(".palette");
  //get the body for the easel
  var canvas = document.querySelector(".canvas");
  //draw the easel
  palette.innerHTML = makePalette(width);
  canvas.innerHTML= makeCanvas(height, width);
  //draw the pallete
  let arrayOfHexcodes= [];
  arrayOfHexcodes.forEach(x=>{
    console.log("fill with colors");
  });

  //onclick listener and event for canvas
  canvas.addEventListener("click", drawOnMe, true);
  //onclick listener for pallete
  palette.addEventListener("click", selectColor, true);

/*

display colors on the bottom, do this programatically
have them display as orbs?  I'm thinking more of show a rainbow....
can we cycle through the colors properly to get a true kaleidascope?
should I give the cells a name or just rely on target?
already did the research for drag and drop.
*/
  function drawOnMe(event)
  {
    event.target.style.backgroundColor = color;
    event.stopPropagation();
  }

  function selectColor(event)
  {
    color = event.target.style.backgroundColor;
    //also update the color selected section.
  }

  function randomColor()
  {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  //do I want to pass in the canvas div or just fetch it?
  function makeCanvas(height, width)
  {
    let strOut ="";
    for(let i=0;i<height;i++)
    {
      strOut +="<div style='display: flex;'>";
      for(let i1=0;i1<width;i1++)
      {
        strOut += "<div class='pixel'></div>";
      }
      strOut += "</div>";
    }
    return strOut;
  }

  function makePalette(colNum)
  {
    //thing to make the pallete
    let strOut="";
    strOut +="<div style='display: flex;'>";
    for(let i=0;i<colNum;i++)
    {
      strOut +="<div style=' width: 10px; height: 10px; border: solid black 1px; background-color: " + randomColor() + ";'></div>";
    }
    strOut += "</div>";
    return strOut;
  }
})
