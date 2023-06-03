window.onload = function() {
  var volumeControl = document.getElementById("volume-control");
  var buttonContainer = document.getElementById("button-container");
  var backgroundColorInterval;
  var volumeLevel = 0;
  var isMuted = false;

  volumeControl.onclick = function() {
    alert("You clicked the volume control!");

    // Simulate changing volume in a frustrating way
    for (var i = 0; i < 100000; i++) {
      setTimeout(function() {
        volumeControl.style.backgroundColor = getRandomColor();
        changeBackgroundColors();
      }, i * 10);
    }
  };

  var volumeDisplay = document.getElementById("volume-display");

  createButton("Volume Up", volumeUp);
  createButton("Volume Down", volumeDown);
  createButton("Mute", toggleMute);
  createButton("Scream", scream);

  function createButton(label, onClick) {
    var button = document.createElement("button");
    button.innerText = label;
    button.onclick = function() {
      onClick();
      moveButton(button);
    };
    button.classList.add("volume-button");
    buttonContainer.appendChild(button);
  }

  function volumeUp() {
    volumeLevel++;
    changeBackgroundColors();
    updateVolumeDisplay();
  }
  
  function volumeDown() {
    if (volumeLevel > 0) {
      volumeLevel--;
      changeBackgroundColors();
      updateVolumeDisplay();
    }
  }
  
  function scream() {
    volumeLevel += 10;
    changeBackgroundColors();
    updateVolumeDisplay();
  }
  
  function updateVolumeDisplay() {
    volumeDisplay.textContent = "Volume: " + volumeLevel;
  }
  
  function moveButton(button) {
    var randomX = Math.random() * (window.innerWidth - button.offsetWidth);
    var randomY = Math.random() * (window.innerHeight - button.offsetHeight);
  
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
  }

  function changeBackgroundColors() {
    clearInterval(backgroundColorInterval);
    if (!isMuted) {
      var intervalDelay = 500 - volumeLevel * 50;
      backgroundColorInterval = setInterval(function() {
        document.body.style.backgroundColor = getRandomColor();
      }, intervalDelay);
    }
  }

  function stopChangingBackgroundColors() {
    clearInterval(backgroundColorInterval);
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
};
