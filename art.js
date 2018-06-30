var color = "white";

var container = document.querySelector('.container');

var x = 10;
var y = 10;
var width = (100 / x).toString() + '%';
var height = width;

for (var i = 0; i < x * y; i++) {
    var newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.style.width = width;
    newCell.style.paddingTop = height;
    container.appendChild(newCell);
}

container.addEventListener('click', function(event) {
    if(event.target.classList.contains('cell')){
        event.target.style.backgroundColor = color;
    }
});

var palette = document.querySelector(".paletteContainer");
palette.addEventListener('click', function(event) {
    color = event.target.style.backgroundColor;
});
