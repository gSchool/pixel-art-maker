var colorOne = "#DC143C"
var colorTwo = "#FFB6C1"
var colorThree = "#DDA0DD"
var colorFour = "#0000FF"
var colorFive = "#87CEEB"
var colorSix = "#00EE76"
var colorSeven = "#FFFF00"
var colorEight = '#000'
var soManyColors = [colorOne,colorTwo,colorThree,colorFour,colorFive,colorSix,colorSeven,colorEight];
var offWhite = "faebd7"
var selectedColor = offWhite;



var newPaletItem = document.createElement('a');
var inner = document.createElement('li');
newPaletItem.appendChild(inner);
var paletList = document.querySelector('.colorKey');
paletList.appendChild(newPaletItem);

var allKeys = document.querySelectorAll('.colorKey li');


for(var i = 0; i < soManyColors.length; i++){
  allKeys[i].style.background = soManyColors[i];
}



// var numOne = allKeys[0];
// var numTwo = allKeys[1];
// var numThree = allKeys[2];
// var numFour = allKeys[3];
// var numFive = allKeys[4];
// var numSix = allKeys[5];
// var numSeven = allKeys[6];

for(var z=0;z<allKeys.length;z++){
  allKeys[z].addEventListener('click', function(event){
    selectedColor = event.target.style.background;
  })
}


var len = allKeys.length;

var allDivs = document.querySelectorAll('div');
console.log(allDivs.length);
var divList = [];
for(var j=0;j<allDivs.length;j++){
  divList.push(allDivs[j]);
}
console.log(divList);



for(var k = 0; k < allDivs.length;k++){
  allDivs[k].addEventListener('click',function(event){
    event.target.style.background = selectedColor;
  })
}
// var topLeftDiv = allDivs[0];
// var topRightDiv = allDivs[1];
// var bottomLeftDiv = allDivs[2];
// var bottomRightDiv = allDivs[3];
// var oneOfThem1 = allDivs[4];
// var oneOfThem2 = allDivs[5];
// var oneOfThem3 = allDivs[6];
// var oneOfThem4 = allDivs[7];
// var oneOfThem5 = allDivs[8];

//chad code...

//var container = document.querySelector('.container')
//container.addEventListener('click',function(event){
//  if(event.target.classList.contains('cell')){
//    event.target.classList.toggle('colored')
//  }
//  console.log(event.target);
//})
