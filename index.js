function makePixel() {
  let body = document.getElementsByTagName('body');
  let newPixel = document.createElement('div');

  newPixel.style.width = '2%';
  newPixel.style.paddingBottom = '2%';
  newPixel.style.cssFloat = 'left';
  newPixel.style.border = '1px solid lightGrey';
  newPixel.className = 'squarePixel'
  pixelBoard.append(newPixel);

  newPixel.addEventListener('dblclick', () => {
    newPixel.style.backgroundColor = 'white';
    newPixel.style.borderColor = 'lightGrey';
  })

}

for (i = 0; i < 1125; i++) {
  makePixel();
}

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

let colorChoice;

chooseButton.addEventListener('click', () => {
  colorChoice = colorPicker.value;
})

// function makePallete(color) {
//   let colorOption = document.createElement('div')
//   colorOption.style.width = '6%'
//   colorOption.style.paddingBottom = '6%'
//   colorOption.style.border = '2px solid black'
//   colorOption.style.backgroundColor = color;
//   colorOption.style.cssFloat = 'right'
//   colorOption.className = 'color-choice'
//   colors.append(colorOption);

//   colorOption.addEventListener('click', () => {

//   })
// }

// makePallete('blue');
// makePallete('orange');
// makePallete('green');
// makePallete('purple');
// makePallete('red');
// makePallete('pink');

