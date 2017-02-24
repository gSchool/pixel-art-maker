var colorOne = "#DC143C"
var colorTwo = "#FFB6C1"
var colorThree = "#DDA0DD"
var colorFour = "#0000FF"
var colorFive = "#87CEEB"
var colorSix = "#00EE76"
var colorSeven = "#FFFF00"
var soManyColors = [colorOne,colorTwo,colorThree,colorFour,colorFive,colorSix,colorSeven];
var offWhite = "faebd7"
var selectedColor = offWhite;


var allKeys = document.querySelectorAll('.colorKey li');

for(var i = 0; i < soManyColors.length; i++){
  allKeys[i].style.background = soManyColors[i];
}


var numOne = allKeys[0];
var numTwo = allKeys[1];
var numThree = allKeys[2];
var numFour = allKeys[3];
var numFive = allKeys[4];
var numSix = allKeys[5];
var numSeven = allKeys[6];

// for(var z=0;z<allKeys.length;z++){
//   allKeys[z].addEventListener('click', function(event){
//     selectedColor = allKeys[z].style.background;
//   })
// }

numOne.addEventListener('click',function(event){
  selectedColor = numOne.style.background;
})
numTwo.addEventListener('click',function(event){
  selectedColor = numTwo.style.background;
})
numThree.addEventListener('click',function(event){
  selectedColor = numThree.style.background;
})
numFour.addEventListener('click',function(event){
  selectedColor = numFour.style.background;
})
numFive.addEventListener('click',function(event){
  selectedColor = numFive.style.background;
})
numSix.addEventListener('click',function(event){
  selectedColor = numSix.style.background;
})
numSeven.addEventListener('click',function(event){
  selectedColor = numSeven.style.background;
})


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




// topLeftDiv.addEventListener('click',function(event){
//   event.target.style.background = selectedColor;
// })
// topRightDiv.addEventListener('click',function(event){
//   event.target.style.background = selectedColor;
// })
// bottomLeftDiv.addEventListener('click',function(event){
//   event.target.style.background = selectedColor;
// })
// bottomRightDiv.addEventListener('click',function(event){
//   event.target.style.background = selectedColor;
// })
// oneOfThem1.addEventListener('click',function(event){
//   event.target.style.background = selectedColor;
// })
// oneOfThem2.addEventListener('click',function(event){
//   event.target.style.background = selectedColor;
// })
// oneOfThem3.addEventListener('click',function(event){
//   event.target.style.background = selectedColor;
// })
// oneOfThem4.addEventListener('click',function(event){
//   event.target.style.background = selectedColor;
// })
// oneOfThem5.addEventListener('click',function(event){
//   event.target.style.background = selectedColor;
// })








//chad code...

//var container = document.querySelector('.container')
//container.addEventListener('click',function(event){
//  if(event.target.classList.contains('cell')){
//    event.target.classList.toggle('colored')
//  }
//  console.log(event.target);
//})
