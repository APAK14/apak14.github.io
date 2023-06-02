// Event listener for the button to change the picture
var changePictureButton = document.getElementById("changePictureButton");
var picture = document.getElementById("picture");

// Array of iceland picture URLs
var dogPictures = [
  "iceland2.jpg",
  "Iceland-10.jpg",
  "Iceland-13.jpg",
];

changePictureButton.addEventListener("click", function() {
  // Generate a random index to select a picture
  var randomIndex = Math.floor(Math.random() * dogPictures.length);
  
  // Change the source and add a class to hide the picture temporarily
  picture.src = dogPictures[randomIndex];
  picture.classList.add("hidden");

  // Wait a brief moment to reveal the new picture
  setTimeout(function() {
    picture.classList.remove("hidden");
  }, 100);
});

// Picture hover
picture.addEventListener("mouseover", function() {
  // Random RGB color value
  var randomColor = generateRandomColor();

  // Change the page background color
  document.body.style.backgroundColor = randomColor;
});

// Function to generate a random RGB color value
function generateRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
