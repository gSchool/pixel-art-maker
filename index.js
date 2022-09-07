function pixArt() {
    var pixel = document.getElementById('container');
    var rows = document.getElementsByClassName('rows');
    var columns = document.getElementsByClassName('columns');
    var colorButtons = document.getElementById('colorButtons')
    var currentColor = "";

 

    function makeRows(rowNum){
        for (let i = 0; i < rowNum; i++) {
            let rowDiv = document.createElement('div');
            rowDiv.style.backgroundColor = 'white';
            
            rowDiv.addEventListener("click",function(){
                rowDiv.style.backgroundColor = currentColor});

            rowDiv.addEventListener("mousedown",function(){
                rowDiv.style.backgroundColor = currentColor
            })
            rowDiv.addEventListener("mouseenter",function(){
                rowDiv.style.backgroundColor = currentColor
            })
            rowDiv.addEventListener("mouseup",function(){
                rowDiv.style.backgroundColor = ""
            })

            pixel.appendChild(rowDiv).className = 'rows';

        }
    }


function buttonChange(){
 var redHolder = document.getElementById("redButton")
 var yellowHolder = document.getElementById("yellowButton")
 var blueHolder = document.getElementById("blueButton")
 var greenHolder = document.getElementById("greenButton")
 var purpleHolder = document.getElementById("purpleButton")


 redHolder.addEventListener("click", function() {
    currentColor = "red"
 })
 yellowHolder.addEventListener("click", function() {
    currentColor = "yellow"
 })
 blueHolder.addEventListener("click", function() {
    currentColor = "blue"
 })
 greenHolder.addEventListener("click", function() {
    currentColor = "green"
 })
 purpleHolder.addEventListener("click", function() {
    currentColor = "purple"
 })

}

buttonChange();
makeRows(144);
}

pixArt();

//make buttons the colors that they represent
//select an individual DIV 
// create event listeners for on clicks on those DIV