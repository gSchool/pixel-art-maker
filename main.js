/*jshint esversion: 6 */
const colorList = ["black", "white", "red", "blue", "green"];

let currentColor = "black";
let gridSize = [40, 30];


function resizePalette(x, y) {
  gridSize = [x, y];

  savePaletteSize(x, y);
  $(".palette").empty();
  initPalette([x, y]);
  initColors(colorList);
  initFooter();
}

function initHeader(x, y) {
  let $headerRow = $("<div>");
  $headerRow.addClass("header-row");

  let $gridLabel = $("<p>");
  $gridLabel.text("Palette Size");
  let $xLabel = $("<label>");
  $xLabel.text("x:");
  let $yLabel = $("<label>");
  $yLabel.text("y:");
  let $xInput = $("<input value=" + x + ">");
  $xInput.attr("id", "x-input");
  let $yInput = $("<input value=" + y + ">");
  $yInput.attr("id", "y-input");
  let $goButton = $("<button type='button'>");

  $goButton.text("Go");

  $goButton.click(function() {
    const xCoord = $("#x-input").val();
    const yCoord = $("#y-input").val();

    resizePalette(xCoord, yCoord);
  });

  $headerRow.append($gridLabel);
  $headerRow.append($xLabel);
  $headerRow.append($xInput);
  $headerRow.append($yLabel);
  $headerRow.append($yInput);
  $headerRow.append($goButton);

  return $headerRow;
}

function initPalette(coords) {
  let $mainPalette = $(".palette");
  let $pixel = $("<div>");

  const x = coords[0];
  const y = coords[1];

  $pixel.addClass("pixel");

  // Create header-row
  const $headerRow = initHeader(x, y);

  $mainPalette.append($headerRow);

  for (let i = 0; i < y; i++) {
    let $row = $("<div>");
    $row.addClass("row");

    for (let j = 0; j < x; j++) {
      $pixel = $("<div>");
      $pixel.addClass("pixel");

      $row.append($pixel);
    }

    $mainPalette.append($row);
  }

  let $pixels = $(".pixel");

  $mainPalette.click(function(event) {
    if ($(event.target).attr("class") === "pixel") {
      $(event.target).css("background-color", currentColor);
    }
  });

  $pixels.mouseover(function(event) {
    if (event.buttons) {
      $(this).css("background-color", currentColor);
    }
  });
}

function initColors(colors) {
  let $row = $("<div>");
  $row.addClass("color-row");

  for (let color of colors) {
    let $color = $("<div>");
    $color.addClass("color");
    $color.css("background-color", color);

    if (color === "black") {
      $color.addClass("selected-color");
    }

    $row.append($color);
  }

  // Add color picker to the end of the color list
  let $colorPickerDiv = $("<div>");
  $colorPickerDiv.addClass("custom-color");
  $colorPickerDiv.text("C");

  let $colorPicker = $("<input type='color' value='#FFFFFF'>");

  $colorPicker.attr("id", "color-picker");

  $colorPicker.change(function() {
    let $colorPicker = $("input");
    $(".custom-color").css("background-color", $(this).val());
    currentColor = $(this).val();
  });

  $colorPickerDiv.click(function() {
    $("#color-picker").trigger("click");
    $(".selected-color").removeClass("selected-color");
    $(this).addClass("selected-color");
  });

  $row.append($colorPickerDiv);
  $row.append($colorPicker);

  let $mainPalette = $(".palette");
  $mainPalette.append($row);

  let $colors = $(".color");

  $colors.click(function() {
    currentColor = $(this).css("background-color");
    $(".selected-color").removeClass("selected-color");
    $(this).addClass("selected-color");
  });
}

function initFooter() {
  let $mainPalette = $(".palette");
  let $footerRow = $("<div>");
  $footerRow.addClass("footer-row");

  let $saveButton = $("<button>");
  $saveButton.text("Save");
  let $loadButton = $("<button>");
  $loadButton.text("Load");

  $saveButton.click(function() {
    let xCoord = gridSize[0];
    let yCoord = gridSize[1];

    result = paletteToArray(xCoord, yCoord);
  });

  $loadButton.click(function() {
    loadData();
  });

  $footerRow.append($saveButton);
  $footerRow.append($loadButton);

  $mainPalette.append($footerRow);

  const $errorRow = $("<div>").addClass("error-row");
  $errorRow.append($("<p id=\"error-msg\">"));
  $mainPalette.append($errorRow);
}

function initArray(x, y) {
  let result = [];

  for (let i = 0; i < x; i++) {
    result[i] = [];
    for (let j = 0; j < y; j++) {
      result[i][j] = 0;
    }
  }

  return result;
}

function paletteToArray(x, y) {
  let xCoord = 0;
  let yCoord = 0;

  let result = initArray(x, y);
  $rows = $(".row");

  for (const row of $rows) {
    for (const pixel of row.children) {
      result[xCoord][yCoord] = $(pixel).css("background-color");
      xCoord++;
    }
    yCoord++;
    xCoord = 0;
  }

  saveData(result);
  return result;
}

function arrayToPalette(artArray) {
  let xCoord = 0;
  let yCoord = 0;

  $rows = $(".row");

  for (const row of $rows) {
    for (const pixel of row.children) {
      $(pixel).css("background-color", artArray[xCoord][yCoord]);
      xCoord++;
    }
    yCoord++;
    xCoord = 0;
  }
}

function saveData(pixelArray) {
  const drawData = JSON.stringify(pixelArray);
  const paletteData = JSON.stringify(gridSize);

  localStorage.setItem("saved-palette-size", paletteData);
  localStorage.setItem("drawing", drawData);
}

function loadData() {
  const drawData = localStorage.getItem("drawing");
  const paletteData = localStorage.getItem("saved-palette-size");

  if (drawData) {
    const result = JSON.parse(drawData);
    gridSize = JSON.parse(paletteData);
    resizePalette(gridSize[0], gridSize[1]);
    arrayToPalette(result);
  }
  else {
    const $error = $("#error-msg");

    $error.text("Error loading save data");
    $error.fadeIn(1000, function() {
      setTimeout(function() {
        $error.fadeOut(1000);
      }, 4000);
    });
  }
}

function loadPaletteSize() {
  const data = localStorage.getItem("palette-size");
  let result;

  if (data) {
    result = JSON.parse(data);
  }
  else {
    result = [40, 30];
  }

  gridSize = result;
}

function savePaletteSize(x, y) {
  let data = [];

  data.push(x, y);

  data = JSON.stringify(data);
  localStorage.setItem("palette-size", data);
}

function fillArea() {

}

loadPaletteSize();
initPalette(gridSize);
initColors(colorList);
initFooter();
