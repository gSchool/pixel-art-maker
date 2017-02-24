// var x = prompt("What size grid would you like?")

// function makeRows (x) {
  // var grid = document.querySelector(.grid)
  // for (var i = 0; i < x; i++) {
    // var row[i] = document.createElement('section');
    // row[i].className = "row" + i
    // grid.appendChild(row[i]);
    // makeBoxes(x, i);
  // }
// }

// function = makeBoxes(x, i) {
  // var row[i] = document.querySelector
  // for (var j = 0; j < x; j++) {


  // }
// }

// makeRows(x)
document.getElementById("button").onclick = function() {
  var x = prompt("What size X by X grid would you like?");
  var grid = document.querySelector('.grid');
  grid.style.width = 30 * x + 'px'
  var cellCount = x * x;
  for (var i = 5; i <= cellCount; i++) {
    var newCell = document.createElement('div')
    newCell.classList.add('cell')
    grid.appendChild(newCell)
  }
}
