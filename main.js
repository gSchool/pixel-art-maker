console.log("Sanity Check");

var color = "black";
  //Get 10 divs on the screen
for(var i = 0; i < 1200; i++){
  var paint = document.getElementById('paint');
  var div = document.createElement('div');
  var body = document.body;
  var container = document.getElementById('container');
  style(div);
  container.appendChild(div);

}

function style(div){
  div.style.width = "10px";
  div.style.height = "10px";
  div.style.border = "1px solid black";
  div.style.padding = "5px";
  div.style.float = "left";
}

colorPallete = document.getElementById('colorPallete');

colorPallete.addEventListener("click",function(event){
  color = event.target.className;
  paint.style.backgroundColor = color;
})

container.addEventListener("click",function(event){
  event.target.style.backgroundColor = color;
})
