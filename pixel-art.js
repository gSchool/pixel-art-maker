let container = document.querySelector(".box");
let footer = document.querySelector("footer");
let colorbrush = "";
let colors = ["honeydew","red", "orange", "yellow", "green", "blue", "purple", "brown", "ghostwhite", "black", "white"];

let colorIndicator = document.createElement("h3");
colorIndicator.textContent = "Current color is =>"
footer.appendChild(colorIndicator);
let colorIndicatorText = document.createElement("h3");
footer.appendChild(colorIndicatorText);

//adds divs into the doc
for (var i = 0; i < 650; i++) {
  //first loop the following happens
  let divs = document.createElement("div");
  divs.className = "cell";
  container.appendChild(divs);
  divs.addEventListener("click", function() {
    divs.style.backgroundColor = colorbrush;
  })
}

//color pallet
for (var i = 0; i < colors.length; i++) {
  let divs = document.createElement("div");
  divs.className = colors[i];
  divs.style.backgroundColor = colors[i];
  footer.appendChild(divs);
    divs.addEventListener("click", function() {
      colorbrush = this.style.backgroundColor;
      colorIndicatorText.textContent = colorbrush;
    });
}

//
// let red = document.createElement("div");
// red.className = "color-pallete";
// footer.appendChild(red);
// red.style.backgroundColor = "red";
// red.addEventListener("click", function() {
//   colorbrush = "red";
// });
//
// let blue = document.createElement("div");
// blue.className = "color-pallete";
// footer.appendChild(blue);
// blue.style.backgroundColor = "blue";
// blue.addEventListener("click", function() {
//   colorbrush = "blue";
// });

// }

// for (var i = 0; i < container.childnodes.length; i++) {
//   container.childnodes[i]
// }
//
// for (var i = 0; i < divs.length; i++) {
//   divs[i].addEventListener("click", function() {
//     console.log('i expect this to run first')
//     console.log(i)
//     this.style.backgroundColor = "red";
//   });
// }

//
// console.log('wait why did this run first')
// console.log(i)
