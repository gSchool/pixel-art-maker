'use strict';

<<<<<<< HEAD
window.onload = function() {
    var divElem = document.createElement('div');
    var canvas = document.getElementById('canvas');
    var red = document.getElementsByClassName("colorRed")[0];
    var green = document.getElementsByClassName("colorGreen")[0];
    canvas.append(divElem);
    divElem.style.backgroundColor = "red";
    divElem.style.height = "10%";
    divElem.style.width = "10%";
    var currentColor = '';

    divElem.addEventListener("click", () => {
        divElem.style.backgroundColor = currentColor;
    })
    red.addEventListener("click", (event) => {
        currentColor = getComputedStyle(red)
            .backgroundColor;
    });
    green.addEventListener("click", (event) => {
        currentColor = getComputedStyle(green)
            .backgroundColor;
    });

=======
window.onload = function (){
console.log("booyah");
var divElem = document.createElement('div');
var canvas = document.getElementById('canvas');
canvas.append(divElem);
divElem.style.border="1px solid black";
divElem.style.height="10%";
divElem.style.width="10%";


// var currentColorDiv = document.getElementsByClassName('colorRed')[0].style
// console.log(currentColor);
//
// var style = currentColorDiv.getComputedStyle(backgroundColor);
// console.log("style " + style)
>>>>>>> 06d4296a9d7c50d3753b73e26ff157f69afe57ce

};
