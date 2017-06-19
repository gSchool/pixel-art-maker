var color = null;
var fillColorToReplace = null;

//used for constructing the palette with base colors
const paletteArray = ['red', 'orangered', 'yellow', 'yellowgreen', 'green', 'blue', 'darkblue', 'indigo', 'darkmagenta', 'violet', 'white', 'grey', 'black'];

const palette = document.getElementById('palette');
const current = document.getElementById('current');
const colorDiv = document.getElementById('customColor');
const colorPicker = document.createElement('input');
const save = document.getElementById('save');
var image = document.getElementsByClassName('box');
const row = document.getElementById('row');

colorPicker.type = 'color';
colorPicker.value = '#1DF511';
customColor.appendChild(colorPicker);

palette.addEventListener('click', colorChange);
row.addEventListener('mousedown', turnMouseEnterListenerOn);
row.addEventListener('mouseup', turnMouseEnterListenerOff);
colorPicker.addEventListener('change', chooser);
save.addEventListener('click', saveDrawing);
load.addEventListener('click', loadDrawing);
clear.addEventListener('click', clearDrawing);

//fill function
function fill(center) {
  let box = document.getElementById(center);
  if (box.style.backgroundColor === fillColorToReplace) {
    box.style.backgroundColor = color;
    center = parseInt(center);
    //use fill on box 1 left
    if (center-22 > 0) {
      fill(center-22);
    }
    //use fill on box 1 down
    if (center%22 != 0) {
      fill(center+1);
    }
    //use fill on box 1 up
    if (center%22 != 1) {
      fill(center-1);
    }
    //use fill on box 1 right
    if (center +22 < 858) {
      fill(center+22);
    }
  }
}

function clearDrawing() {
  for (let i = 0; i < image.length; i++) {
    image[i].style.backgroundColor = 'white';
  }
}

function loadDrawing() {
  let saved = prompt('Which picture do you want to work on now?');
  if (localStorage.getItem(saved) === null) {
    alert('There is no drawing by that name in memory...');
    loadDrawing();
  } else {
    let picture = localStorage.getItem(saved);
    let pictureArray = picture.split("~");
    for (let i = 0; i < pictureArray.length; i++) {
      image[i].style.backgroundColor = pictureArray[i];
    }
  }
}

function saveDrawing() {
  let picture = image[0].style.backgroundColor;
  for (let i = 1; i < 858; i++) {
    picture += '~' + image[i].style.backgroundColor;
  }
  let saved = prompt('What is this beautiful picture called?');
  localStorage.setItem(saved, picture);
}

function chooser (event) {
  color = event.target.value;
}

//section for holding down click to color as you go
function turnMouseEnterListenerOn (event) {
  if (event.target.className === 'box') {
    paint(event);
    row.addEventListener('mouseover', paint);
  }
}
function turnMouseEnterListenerOff (event) {
  if (event.target.className === 'box') {
    row.removeEventListener('mouseover', paint);
  }
}

//generic paint function
function paint (event) {
  //checks target is a box so clicking nearby wont trigger it
  if (event.shiftKey) {
    fillColorToReplace = event.target.style.backgroundColor;
    console.log('heard' + fillColorToReplace);
    fill(event.target.id);
  } else {
    if (event.target.className === 'box') {
      event.target.style.backgroundColor = color;
    }
  }
}

function colorChange (event) {
  //checks target is a color splotch so this wont activate if clicked elsewhere on palette
  if (event.target.className === 'color') {
    color = event.target.style.backgroundColor;
    current.style.backgroundColor = color;
  }
}

//constructs palette
(function buildPalette () {
  for (let i = 0; i < paletteArray.length; i++) {
    let appendable = document.createElement('div');
    appendable.classList.add('color');
    appendable.style.backgroundColor = paletteArray[i];
    document.getElementById('palette').appendChild(appendable);
  }
})();
//constructs the pixel grid
(function buildGrid () {
  for (let i = 0; i < 39; i++) {
    let column = document.createElement('div');
    column.classList.add('column');
    for (let j = 0; j < 22; j++) {
      let box = document.createElement('div');
      box.classList.add('box');
      box.setAttribute('id', (22*i+j+1));
      box.style.backgroundColor = 'white';
      column.appendChild(box);
    }
  row.appendChild(column);
  }
})();
