'use strict';
var colorchoice;
var colorready=false;
for (var i = 0; i < 40; i++) {
  var idivs= document.createElement('div');

  var board= document.body.children[0];

   board.appendChild(idivs);

    for (var j = 0; j < 40; j++) {
    var div= document.createElement('div');
    var irow= document.body.children[0].children[i];
    irow.className="row";
    irow.appendChild(div);
    var box= document.body.children[0].children[i].children[j];



    box.addEventListener("click", color);
    box.className="box";

   }


   console.log(board);

}

function color(){
  if (colorready===true){
  event.target.style.backgroundColor=colorchoice;
  event.target.removeEventListener('click', color);
}
else{
  alert("pick a color!");
}
}

function picker(event){
colorchoice = event.target.style.backgroundColor;
colorready=true;
}

//color picker
var next= document.createElement('div');
var colorbox1= document.body.children[1].appendChild(next);
colorbox1.className="color1";
colorbox1.style.backgroundColor="blue";
colorbox1.addEventListener('click', picker);


var next= document.createElement('div');
var colorbox2= document.body.children[1].appendChild(next);
colorbox2.className="color2";
colorbox2.addEventListener('click', picker);
colorbox2.style.backgroundColor="rgb(230, 28, 131)";

var next= document.createElement('div');
var colorbox3= document.body.children[1].appendChild(next);
colorbox3.className="color3";
colorbox3.addEventListener('click', picker);
colorbox3.style.backgroundColor="rgb(224, 242, 18)";

document.body.children[1].children[0].addEventListener('input',changeEventHandler);

function changeEventHandler(event){

colorchoice = event.target.value;
colorready=true;
}
