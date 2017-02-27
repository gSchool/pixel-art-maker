


var grid = document.querySelector('.grid')
createGrid(16, 28)

var chosenColor
// function to avoid repeated code for each color
function assignColor(color) {
  document.getElementById('button' + color).onclick = function() {
  	chosenColor = 'color' + color
	}
}
// assign buttons thier colors
assignColor('Red')
assignColor('Blue')
assignColor('Yellow')
assignColor('Purple')
assignColor('Green')
assignColor('Orange')
assignColor('White')
assignColor('Black')
assignColor('Eraser')

// toggle pixel on grid
grid.addEventListener('click', function(event) {
	console.log(event.target)
  if (event.target.classList.contains('cell')) {
  event.target.classList = ""
  event.target.classList.add('cell')
    	event.target.classList.toggle(chosenColor)
    }
})

// create grid on button press
document.getElementById("button").onclick = function() {
  // ask user for size requirement
  // maybe change this to input boxes
  var x = parseInt(document.getElementById("gridWidth").value)
  var y = parseInt(document.getElementById("pixelSize").value)
  createGrid(x, y)
}

function createGrid (x, y) {
	while (grid.firstChild) {
  	grid.removeChild(grid.firstChild);
  }
	// set grid width so that divs will properly wrap
  grid.style.width = (y + 2) * x + 'px'
  // get total number of new individual cells needed
  var cellCount = x * x;
  // iterate through and create each new cell
  for (var i = 1; i <= cellCount; i++) {
    var newCell = document.createElement('div')
    // set <div class='cell'>
    newCell.classList.add('cell')
    newCell.setAttribute('id', i)
    // newCell.textContent = i
    grid.appendChild(newCell)
    // set cell size to requested px size
    newCell.style.width = y + 'px'
    newCell.style.height = y + 'px'
  }
}

// add custom color
document.getElementById("colorButton").onclick = function() {
  var customColorButton = document.getElementById("colorButton")
  var customColor = document.getElementById("colorButton").value
  document.getElementById("colorButton").style.background = 'customColor'
}


// make mario (in progress)
function makeMario() {
  var divs = document.querySelectorAll('div');
  for (i = 0; i < divs.length; i++) {
    if (i+1 == 6||7||8||9||10||21||22||23||24||25||26||27||28||29||117||118||120||121||123||124||132||133||134||136||137||139||140||141||147||148||149||150||155||156||157||158||165||172) {
  divs[i].style.background = '#FF0000';
    }
  }
}
