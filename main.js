/*jshint esversion: 6 */
const colorList = ["black", "white", "red", "blue", "green"];

let currentColor = "black";

let $pixels = $(".pixel");
let $colors = $(".color");

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
    let xCoord = $("#x-input").val();
    let yCoord = $("#y-input").val();

    $(".palette").empty();
    initPalette(xCoord, yCoord);
    initColors(colorList);
  });

  $headerRow.append($gridLabel);
  $headerRow.append($xLabel);
  $headerRow.append($xInput);
  $headerRow.append($yLabel);
  $headerRow.append($yInput);
  $headerRow.append($goButton);

  return $headerRow;
}

function initPalette(x, y) {
  let $mainPalette = $(".palette");
  let $pixel = $("<div>");
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

function paletteToArray(x, y) {
  let result = [];

  $rows = $(".row");

  for (const row of $rows) {
    for (const pixel of row.children) {
      // result[y][x] = $(pixel).css("background-color");
      result[y][x] = "";
      x++;
      // console.log($(pixel).css("background-color"));
    }
    y++;
  }

  console.log(result);
}

initPalette(40, 30);
initColors(colorList);
paletteToArray(40, 30);
