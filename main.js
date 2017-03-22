// Draw Grid
(function() {
    for (var x = 0; x < 25; x++) {
        for (var y = 0; y < 28; y++) {
            var cell = $("<div class='cell'></div>");
            cell.appendTo('#container');
        }

    }
})();


// Mousedown -- change cell color
$('.cell').mousedown(function() {
    $(this).css('background-color', selectedColor)
    $(this).css('border-color', selectedColor);
})


var selectedColor;

// Color cells while dragging mouse
var isDown = false;

$(document).mousedown(function() {
        isDown = true;
    }).mouseup(function() {
        isDown = false;
    });

$('#container').on('mouseover', '.cell', function() {
    if (isDown) {
        $(this).css('background-color', selectedColor);
        $(this).css('border-color', selectedColor);
    }
});

////////////////
// Color Pickers
////////////////
$(".sap-green").on('click', function() {
    selectedColor = "#0A3410";
})
$(".alizarin-crimson").on('click', function() {
    selectedColor = "#4E1500";
})
$(".van-dyke-brown").on('click', function() {
    selectedColor = "#221B15";
})
$(".dark-sienna").on('click', function() {
    selectedColor = "#5F2E1F";
})
$(".midnight-black").on('click', function() {
    selectedColor = "#000";
})
$(".prussian-blue").on('click', function() {
    selectedColor = "#021E44";
})
$(".phthalo-blue").on('click', function() {
    selectedColor = "#0C0040";
})
$(".phthalo-green").on('click', function() {
    selectedColor = "#102E3C";
})
$(".cadmium-yellow").on('click', function() {
    selectedColor = "#FFEC00";
})
$(".bright-red").on('click', function() {
    selectedColor = "#DB0000";
})
$(".titanium-white").on('click', function() {
    selectedColor = "#FFF";
})
