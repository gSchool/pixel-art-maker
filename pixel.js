for (i=0; i<4814; i++) {
  var pixel = document.createElement("div")
  var body = document.querySelector("body")
  body.style.display = "flex"
  body.style.flexWrap = "wrap"
  pixel.style.border = "1px solid gray"
  pixel.style.height = "8px"
  pixel.style.width = "8px"
  body.appendChild(pixel)
}
