$(document).ready(function() {
  var currentColor = "black";

  // set up the rows
  for (i=0; i<30; i++) {
    var row = document.createElement("tr")
    $("table").append(row)

    // set up the columns
    for (x=0; x<75; x++) {
      var pixelBox = document.createElement("td")
      row.append(pixelBox)
      // event listener to change pixelBox color to match 'currentColor'
      pixelBox.addEventListener("click", function () {
        this.style.backgroundColor = currentColor
      })
    }
  }

  // array of available colors
  var colors = ["black", "gray" ,"#BF3F3F", "#BF7F3F", "#BFBF3F", "#7FBF3F", "#3FBF3F",  "#3FBF7F", "#3FBFBF", "#3F7FBF", "#3F3FBF", "#7F3FBF", "#BF3FBF", "#BF3F7F"]

  // color palette using 'colors' array
  for (i=0; i<colors.length; i++) {
    var paletteColor = document.createElement("div")
    $("#palette").append(paletteColor)
    $("#palette > div").addClass("addPaletteColor")
    paletteColor.style.backgroundColor = colors[i]
      // event listener to change pixelBox color to match 'currentColor'
      paletteColor.addEventListener("click", function () {
        var currentColorIcon = document.getElementById("currentColor");
        currentColor = this.style.backgroundColor;
        currentColorIcon.style.backgroundColor = currentColor
    })
  }
})
