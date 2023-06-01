window.onload = function() {
    var volumeControl = document.getElementById("volume-control");
  
    volumeControl.onclick = function() {
      alert("You clicked the volume control!");
  
      // Simulate changing volume in a frustrating way
      for (var i = 0; i < 100000; i++) {
        setTimeout(function() {
          volumeControl.style.backgroundColor = getRandomColor();
        }, i * 10);
      }
    };
  
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  };
  