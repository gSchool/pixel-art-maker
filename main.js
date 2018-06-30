function setGrid() {
  var gridwidth= doucument.querySelector('.width');
  var gridheight= document.querySelector('.height');
  var container = document.querySelector('.container');

  for (var i = 0; i < gridheight; i++) {
    var newRow = document.createElement('section')
    newRow.classList.add('row');
    container.appendChild(newRow);
    for (var j = 0; j < gridwidth; j++) {
      var newColumn = document.createElement('div');
      newColumn.classList.add('column')
      newRow.appendChild(newColumn);

    }

  }
}

// function getColor() {
//  var container = document.querySelector('container');
//  container.addEventListener("click", function(event){
//    if (event.target.classList('column')) {
//
//    }
//  }
// }

setGrid();

// container.addEventListener("click", function(event) {
//   if (event.target.classList.contains('cell')) {
//
//   }
// }
