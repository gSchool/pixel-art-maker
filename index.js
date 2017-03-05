
var body = document.getElementsByTagName('body')[0]
var wrapper = document.createElement('section');
body.appendChild(wrapper);


for (var i = 0; i < 20; i++) {
  var row = document.createElement('div')
  wrapper.appendChild(row);


  for (var j = 0; j < 10; j++) {
    var square = document.createElement('div')
    row.appendChild(square);
    square.style.height = '50px';
    square.style.width = '50px';
    square.style.border = '1px solid black';
    square.style.float ="left";
    square.addEventListener('click', function(){
      this.style.backgroundColor = 'pink';
    })
  }
}

var palette = document.createElement('section');
body.appendChild(palette);
palette.style.clear = "both"

var hufflepuffColors = ['#ecb939', '#f0c75e', '#726255', '#372e29', '#000000'];
var currentColor = '#ecb939';

function getColor(pickEventColor){
  currentColor = pickEventColor.target.style.backgroundColor;

}
for (var i = 0; i < 5; i++) {
var paletteSquare = document.createElement('div')
document.getElementsByTagName('section')[1].appendChild(paletteSquare);
paletteSquare.style.height = '100px';
paletteSquare.style.width = '100px';
paletteSquare.style.border = '1px solid black';
paletteSquare.style.float="left";
paletteSquare.style.backgroundColor=hufflepuffColors[i];

paletteSquare.addEventListener('click', getColor);
}



function applyColor(event){
  event.target.style.backgroundColor = currentColor;

}


var clickSquareHufflepuff = document.querySelector('section');

clickSquareHufflepuff.addEventListener('click', applyColor);
