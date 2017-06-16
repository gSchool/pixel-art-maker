/*jshint esversion: 6 */

//Fix custom color codes - sometimes returns hex.
//Sanitize custom palette input;

const colorList = ["black", "white", "red", "blue", "green", "orange", "yellow", "purple"];

let currentColor;
let gridSize = [40, 30];
let currentTool;


function resizePalette(x, y) {
  gridSize = [x, y];

  savePaletteSize(x, y);
  $(".palette").empty();
  initPalette([x, y]);
  initColors(colorList);
  initTools();
  initFooter();
}

function initTools() {
  currentTool = "pencil";

  let $row = $("<div>");
  $row.addClass("tool-row");

  let $pencilTool = $("<img>");
  $pencilTool.attr("src", "images/pencil-tool.png");
  $pencilTool.attr("width", "40px");
  $pencilTool.attr("id", "pencil");
  $pencilTool.addClass("selected-tool");
  $pencilTool.addClass("tool");

  let $fillTool = $("<img>");
  $fillTool.attr("src", "images/fill-tool.png");
  $fillTool.attr("width", "40px");
  $fillTool.attr("id", "fill");
  $fillTool.addClass("tool");

  let $colorTool = $("<img>");
  $colorTool.attr("src", "images/color-selector.png");
  $colorTool.attr("width", "40px");
  $colorTool.attr("id", "color-selector");
  $colorTool.addClass("tool");

  $row.click(function(event) {
    switch(event.target.id) {
      case "pencil":
        currentTool = "pencil";
        changeToolClass(event.target);
        break;
      case "fill":
        currentTool = "fill";
        changeToolClass(event.target);
        break;
      case "color-selector":
        $("#color-picker").trigger("click");
        break;
    }
  });

  $row.append($pencilTool);
  $row.append($fillTool);
  $row.append($colorTool);

  let $mainPalette = $(".palette");
  $mainPalette.append($row);
}

function changeToolClass(tool) {
  $(".selected-tool").removeClass("selected-tool");
  $(tool).addClass("selected-tool");
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

  // Create header-row
  const $headerRow = initHeader(x, y);

  $mainPalette.append($headerRow);

  for (let i = 0; i < y; i++) {
    let $row = $("<div>");
    $row.addClass("row");

    for (let j = 0; j < x; j++) {
      $pixel = $("<div>");
      $pixel.addClass("pixel");
      $pixel.css("background-color", "rgb(255, 255, 255)");
      $pixel.attr("id", `pixel-${j}-${i}`);

      $row.append($pixel);
    }

    $mainPalette.append($row);
  }

  let $pixels = $(".pixel");

  $mainPalette.click(function(event) {
    if ($(event.target).hasClass("pixel")) {
      if (currentTool === "pencil") {
        $(event.target).css("background-color", currentColor);
      }
      else if (currentTool === "fill") {
        let pixelX = Number(event.target.id.split("-")[1]);
        let pixelY = Number(event.target.id.split("-")[2]);

        fillArea(pixelX, pixelY, currentColor);
      }
    }
  });

  $mainPalette.mousedown(function(event) {
    if (currentTool === "pencil") {
      if ($(event.target).hasClass("pixel")) {
        $(event.target).css("background-color", currentColor);
      }
    }
  });

  // $pixels.mouseover(function(event) {
  //   if (currentTool === "pencil") {
  //     if (event.buttons) {
  //       $(this).css("background-color", currentColor);
  //     }
  //   }
  // });
  $mainPalette.mouseover(function(event) {
    if ($(event.target).hasClass("pixel")) {
      if (currentTool === "pencil") {
        if (event.buttons) {
          $(event.target).css("background-color", currentColor);
        }
      }
    }
  });
}

function initColors(colors) {
  const COLORS_PER_ROW = 10;

  let $row = $("<div>");
  $row.addClass("color-row");

  let $currentColorElement = $("<div>");
  $currentColorElement.addClass("current-color");

  $row.append($currentColorElement);

  let i = 0;
  let $subColorRow;

  for (let color of colors) {
    if (i % COLORS_PER_ROW === 0) {
      if ($subColorRow) {
        $row.append($subColorRow);
        $row.append($("<br>"));
      }
      $subColorRow = $("<div>");
      $subColorRow.addClass("sub-color-row");
    }

    let $color = $("<div>");

    $color.addClass("color");
    $color.css("background-color", color);

    $subColorRow.append($color);

    i++;
  }

  if (i % COLORS_PER_ROW !== 0 || COLORS_PER_ROW >= colors.length) {
    $row.append($subColorRow);
  }

  let $colorPicker = $("<input type='color' value='#FFFFFF'>");

  $colorPicker.attr("id", "color-picker");

  $colorPicker.change(function() {
    let $colorPicker = $("input");
    $(".current-color").css("background-color", $(this).val());
    currentColor = $(this).val();
  });

  $row.append($colorPicker);

  let $mainPalette = $(".palette");
  $mainPalette.append($row);

  let $colors = $(".color");

  currentColor = $($colors[0]).css("background-color");
  $currentColorElement.css("background-color", currentColor);

  $colors.click(function() {
    currentColor = $(this).css("background-color");
    let $currentColor = $(".current-color");
    $currentColor.css("background-color", currentColor);
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
    saveData(result);
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

function fillArea(originX, originY, fillColor) {
  let pixels = paletteToArray(gridSize[0], gridSize[1]);
  let pixelStack = [[originX, originY]];

  let x;
  let y;

  let checkLeft = false;
  let checkRight = false;

  let startColor = pixels[originX][originY];

  if (startColor === fillColor) {
    return;
  }

  while (pixelStack.length) {
    let coords = pixelStack.pop();

    x = coords[0];
    y = coords[1];
    checkLeft = false;
    checkRight = false;

    while (y >= 0 && matchColor(startColor, pixels[x][y])) {
      y--;
    }
    y++;

    while (y <= gridSize[1] - 1/*maxgridsize*/ && matchColor(startColor, pixels[x][y])) {
      if (x - 1 >= 0) {
        if (matchColor(startColor, pixels[x-1][y])) {
          if (checkLeft === false) {
            checkLeft = true;
            pixelStack.push([x-1,y]);
          }
        }
        else if (checkLeft === true) {
          checkLeft = false;
        }
      }

      if (x + 1 <= gridSize[0] - 1 /*maxgridsize*/) {
        if (matchColor(startColor, pixels[x+1][y])) {
          if (checkRight === false) {
            checkRight = true;
            pixelStack.push([x+1,y]);
          }
        }
        else if (checkRight === true) {
          checkRight = false;
        }
      }
      pixels[x][y] = fillColor;
      y++;
    }
  }

  arrayToPalette(pixels);
}

function matchColor(startColor, pixel) {
  if (startColor === pixel) {
    return true;
  }
  return false;
}

loadPaletteSize();
initPalette(gridSize);
initColors(colorList);
initTools();
initFooter();
