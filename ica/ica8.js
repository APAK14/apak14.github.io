// Event listener for the first element
var element1 = document.getElementById("element1");
element1.addEventListener("click", function() {
  // Change the background color of element1
  element1.style.backgroundColor = "blue";
});

// Event listener for the second element
var element2 = document.getElementById("element2");
element2.addEventListener("mouseover", function() {
  // Change the text content of element2
  element2.textContent = "You hovered!";
});