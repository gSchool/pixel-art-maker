"use strict";

for (var i = 0; i < 2204; i++) {
  var pixel = document.createElement('div');
  pixel.style.height = "20px";
  pixel.style.width = "20px";
  pixel.style.borderRight = "1px solid black";
  pixel.style.borderBottom = "1px solid black";
  pixel.style.float = "left";
  pixel.style.backgroundColor = 'white';
  pixel.addEventListener('click',colorChange);
  document.querySelector('.canvass').appendChild(pixel);
}

function colorChange () {
  this.style.backgroundColor = currentColor;
}

function colorAssign () {
  currentColor = this.style.backgroundColor;
}

var currentColor = '';

var colorArray = ['#7C7C7C','#0000FC','#0000BC','#4428BC','#940084','#A80020','#A81000','#881400','#503000','#007800','#006800','#005800','#004058','#000000','#BCBCBC','#0078F8','#0058F8','#6844FC','#D800CC','#E40058','#F83800','#E45C10','#AC7C00','#00B800','#00A800','#00A844','#008888','#F8F8F8','#3CBCFC','#6888FC','#9878F8','#F878F8','#F85898','#F87858','#FCA044','#F8B800','#B8F818','#58D854','#58F898','#00E8D8','#787878','#FCFCFC','#A4E4FC','#B8B8F8','#D8B8F8','#F8B8F8','#F8A4C0','#F0D0B0','#FCE0A8','#F8D878','#D8F878','#B8F8B8','#B8F8D8','#00FCFC','#F8D8F8'];

for (var j = 0; j < colorArray.length; j++) {
  var color = document.createElement('div');
  color.style.height = "34px";
  color.style.width = "34px";
  color.style.border = "1px solid white";
  color.style.backgroundColor = colorArray[j].toString();
  color.style.borderRadius = "30px";
  color.style.margin = ".1% 0 0 .2%";
  color.style.display = "inline-block";
  color.addEventListener('click', colorAssign);
  document.querySelector('.palette').appendChild(color);
}

var customColor = document.querySelector('input');

customColor.addEventListener('change', function() {
  currentColor = customColor.value;
});

var colorIndicator = document.querySelector('.currentColor');

window.addEventListener('click', function() {
  colorIndicator.style.backgroundColor = currentColor;
});
