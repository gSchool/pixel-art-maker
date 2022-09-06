// defines properties of each pixel / creates pixel when invoked
function makePixel() {
  let body = document.getElementsByTagName('body');
  let newPixel = document.createElement('div');

  newPixel.style.width = '2%';
  newPixel.style.paddingBottom = '2%';
  newPixel.style.cssFloat = 'left';
  newPixel.style.border = '1px solid lightGrey';
  newPixel.className = 'squarePixel'
  pixelBoard.append(newPixel);
  // restores pixel properties back to grid default
  newPixel.addEventListener('dblclick', () => {
    newPixel.style.backgroundColor = 'white';
    newPixel.style.borderColor = 'lightGrey';
  })

}
// creates grid
for (i = 0; i < 1125; i++) {
  makePixel();
}

// allows use of paintbrush feature
let squarePixel = document.getElementsByClassName('squarePixel')
for (let i = 0; i < squarePixel.length; i++) {
  squarePixel[i].addEventListener('mousedown', (e) => {
    e.target.style.backgroundColor = colorChoice;
    e.target.style.borderColor = colorChoice;
  })
  squarePixel[i].addEventListener('mouseenter', (e) => {
    if (e.buttons === 1) {
      e.target.style.backgroundColor = colorChoice;
      e.target.style.borderColor = colorChoice;
    }
  })
}

// saves color choice to variable for use in paintbrush
let colorChoice;

chooseButton.addEventListener('click', () => {
  colorChoice = colorPicker.value;
})



// when save is clicked, pushes squarePixel values to array
// when load is clicked, opens saved picture inside of grid (reapplies properties of each pixel)

// save new array assigned to variable of input string (ex. tom) - creates array of squarePixel values

// load tom - gets values of tom array - replaces all current values on the grid to the values of tom array

// stringify to save, parse to load

for (let i = 0; i < squarePixel.length; i++) {
  saveButton.addEventListener('click', () => {
    console.log(squarePixel[i].style.backgroundColor)
  })
  loadButton.addEventListener('click', () => {

  })
}
