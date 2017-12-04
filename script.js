f(){
  let width=0;
  let height=0;
  let color ="";
  //get the body for the palette
  var palette = document.getElementById("color_section");
  //get the body for the easel
  var canvas = document.getElementById("grid_container");
  //draw the easel
  makeCanvas(height, width);
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
    event.target.style.backgroundColor
  }

  function selectColor(event)
  {
    color = event.target.
  }

  function randomColor()
  {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  //do I want to pass in the canvas div or just fetch it?
  function makeCanvas(height, width)
  {
    for(let int i=0;i<height;i++)
    {
      //make a row
      for(let int i1=0;i1<width;i1++)
      {
        //make a cell
      }
    }
  }
}
