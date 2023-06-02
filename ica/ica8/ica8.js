// Event listener for the button to change the picture
var changePictureButton = document.getElementById("changePictureButton");
var picture = document.getElementById("picture");

// Array of iceland picture URLs
var dogPictures = [
  "ica8img/iceland2.jpg",
  "ica8img/iceland-10.jpg",
  "ica8img/iceland-13.jpg",
  "ica8img/iceland-3.jpg",
  "ica8img/iceland-4.jpg",
  "ica8img/iceland-12.jpg",
  "ica8img/iceland.jpg",
];

var currentPictureIndex = 0;

changePictureButton.addEventListener("click", function() {
  // Generate a random index that is different from the current index
  var randomIndex = currentPictureIndex;
  while (randomIndex === currentPictureIndex) {
    randomIndex = Math.floor(Math.random() * dogPictures.length);
  }

  // Update the current picture index
  currentPictureIndex = randomIndex;

  // Change the source and add a class to hide the picture temporarily
  picture.src = dogPictures[randomIndex];
  picture.classList.add("hidden");

  // Wait for a brief moment before removing the hidden class to reveal the new picture
  setTimeout(function() {
    picture.classList.remove("hidden");
  }, 100);
});

// Event listener for the picture hover
picture.addEventListener("mouseover", function() {
  // Generate a random RGB color value
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
