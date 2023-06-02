function generateStory(choice) {
    // Array of silly story components
    const sillyStory = [
      "Once upon a time, there was a person who had to choose between a cat and a dog.",
      "In a small town, there lived a peculiar individual faced with the difficult decision of adopting either a cat or a dog.",
      "Deep in the enchanted forest, a mystical being found themselves torn between the companionship of a cat and the loyalty of a dog."
    ];
  
    // Randomly select a silly story component
    const randomIndex = Math.floor(Math.random() * sillyStory.length);
    const storyComponent = sillyStory[randomIndex];
  
    // Get the character's name
    const characterName = prompt("Please enter a name for the character:");
  
    // Generate the complete silly story based on the user's choice and character's name
    let completeStory;
    if (choice === "cat") {
      completeStory = storyComponent + " They ultimately chose the cat and named it " + characterName + ". Hilarity ensued as " + characterName + " took over the household, demanding treats and attention at all times!";
    } else if (choice === "dog") {
      completeStory = storyComponent + " They decided to adopt a dog named " + characterName + ", who turned out to be the goofiest and most lovable companion. " + characterName + "'s wagging tail brought joy and laughter to everyone they encountered!";
    } else {
      completeStory = "Oops! It seems you didn't choose between a cat or a dog. The story ends here.";
    }
  
    // Display the generated story
    const storyParagraph = document.getElementById("story");
    const storyBox = document.querySelector(".story-box");
    storyParagraph.textContent = completeStory;
    storyBox.style.display = "block";
  }
  
  