// window.addEventListener("click", function() {
//   alert("You clicked on the page!");
// });



var blueBox = document.querySelector('#blue');
var redBox = document.querySelector('#red');

blueBox.addEventListener('click', function(event) {
  console.log("blue was selected");
  if(!event.target.classList.contains('#blue')) {
   event.target.classList.add('selected');
   redBox.classList.remove('selected');
  }
 }
);

redBox.addEventListener('click', function(event) {
  console.log("red was selected");
  if(!event.target.classList.contains('#blue')) {
   event.target.classList.add('selected');
   blueBox.classList.remove('selected');
  }
 }
);
