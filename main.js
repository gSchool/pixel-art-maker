

var color = document.getElementById("#blue")

//document.getElementById("myBtn").addEventListener("click", displayDate);


container.addEventListener('click', function(event)) {
  console.log(event.target)
  if(event.targert.classList.contains('cell')) {
    event.target.classList.toggle('colored')
  }
}
