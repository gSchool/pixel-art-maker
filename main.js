let pixels = document.getElementsByClassName("pixel");

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("click", paint);
}

function paint(event){
  event.target.style.backgroundColor = "red";
}
