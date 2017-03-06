/////// This IIFE draws the grid ///////
const gridDrawer = (function() {
    const gridDrawer = {}
    const $grid = $('.grid')[0]

    gridDrawer.addCells = function(n) {
        let i = 0

        while (i++ < n) {
            const $cell = $('<div>').addClass('cell')[0]
            $grid.append($cell)
        }
        return $grid
    }

    //returns number of cells to add
      //this function likely will not work fully as imagined without including more AJAX and asynchronous code
    gridDrawer.calculateGridSize = function() {}


    function getImageData(){
      const arrayOfImageData = []
      const cells = document.getElementsByClassName('.cell')
      console.log(cells)
      return arrayOfImageData
    }

    gridDrawer.saveImage = function(){
      const currentState = JSON.stringify(getImageData())
      // http://html5doctor.com/storing-data-the-simple-html5-way-and-a-few-tricks-you-might-not-have-known/
      console.log(currentState)
      return localStorage.setItem('cells', currentState)
    }

    gridDrawer.loadImage = function(){
      // const stateToLoad = JSON.parse()
      // return localStorage.getItem('background-color')
    }

    return gridDrawer
})()


///////Invokes grid to be drawn on //////
  //gridDrawer.addCells(gridDrawer.calculateGridSize())
  //window.addEventListener("resize", myFunction);

  function start(){
    if(screen.width < 900){
      return gridDrawer.addCells(1000)
    }
    else if(screen.width < 600){
      return gridDrawer.addCells()
    }
    return gridDrawer.addCells(2500)
  }


/////// This section controls painting functionality ///////
$(document).ready(function() {
    let isDown = false;

    $(document).mousedown(function() {
            isDown = true; // When mouse goes down, set isDown to true
        })
        .mouseup(function() {
            isDown = false; // When mouse goes up, set isDown to false
        });


    $('#colorPicker').on('click', function() {
        let $pickedColor = $('#colorPicker').val()

        $('.cell').mouseover(function() {
            if (isDown) {
                $(this).css('background-color', $pickedColor)
            }
        })

    })

    $('#saveImage').on('click', function(){
      return gridDrawer.saveImage()
    })
})

start()
