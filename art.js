var color = "white";

var container = document.querySelector('.container');

var x = 10;
var y = 10;
var width = (100 / x).toString() + '%';
var height = width;

for (var i = 0; i < x * y; i++) {
    var newCell = document.createElement('div');
    newCell.style.width = width;
    newCell.style.paddingTop = height;
    container.appendChild(newCell);
}

container.addEventListener('click', function(event) {
    event.target.style.backgroundColor = color;
    // if(event.target.classList.contains('cell')){
    //     event.target.classList.toggle('colored')
    // }
});

var palette = document.querySelector(".paletteContainer");
palette.addEventListener('click', function(event) {
    color = event.target.style.backgroundColor;
    console.log(event.target.style.backgroundColor);
    // if(event.target.classList.contains('cell')){
    //     event.target.classList.toggle('colored')
    // }
});
