var width='100'
var height='45'
var selected_color

document.addEventListener('DOMContentLoaded', function() {
    var grid = document.querySelector('.grid')
    
    var palette = document.querySelector('.palette')
//    var pixel = document.querySelector('tr td')


    for (var i = 0; i < height; i++) {
        var line = document.createElement('tr')
        grid.appendChild(line) //create row
        for (var y = 0; y < width; y++){
            var pixel = document.createElement('td') //create pixel
            pixel.classList.add('cell')
            line.appendChild(pixel)
        }
    }
    
    
    palette.addEventListener("click", function(e) {
        selected_color = e.target.className //picks up color
        document.addEventListener("click", function(e){
            var clicked = e.target //click on pixel
            console.log(clicked)
            clicked.classList = selected_color //whatever you click
        })

    })
    
    
})