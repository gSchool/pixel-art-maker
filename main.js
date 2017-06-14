let pixels = document.getElementsByClassName("pixel");
let colorDot = document.getElementsByClassName("color_dot")
let chosenColor = ""

for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener("click", paint);
}
for (let i = 0; i < pixels.length; i++) {
  colorDot[i].addEventListener("click", colorChoice);
}

function colorChoice(event){
  chosenColor = event.target.id;
  // console.log(chosenColor);
}

function paint(event){
  event.target.style.backgroundColor = chosenColor;
}
