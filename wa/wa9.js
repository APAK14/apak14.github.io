// Select elements from the HTML
const questionElement = document.getElementById('js-question');
const answerElement = document.getElementById('js-answer');
const newQuestionButton = document.getElementById('js-new-question');
const showAnswerButton = document.getElementById('js-show-answer');

// Function to fetch a random trivia question
function getQuestion() {
  // Make a fetch request to the trivia API endpoint
  fetch('https://opentdb.com/api.php?amount=10&category=12')
    .then(response => response.json())
    .then(data => {
      // Extract the question and answer from the API response
      const question = data.results[0].question;
      const answer = data.results[0].correct_answer;

      // Display the question in the HTML
      questionElement.innerHTML = question;


      // Store the answer in a custom data attribute for later use
      questionElement.dataset.answer = answer;

      // Clear any previous answer from the display
      answerElement.textContent = '';
      answerElement.style.display = 'none';
    })
    .catch(error => {
      console.error(error);
      questionElement.textContent = 'Failed to fetch question.';
    });
}

// Function to show the answer
function showAnswer() {
  // Get the answer from the stored data attribute
  const answer = questionElement.dataset.answer;

  // Display the answer in the HTML
  answerElement.textContent = `Answer: ${answer}`;
  answerElement.style.display = 'block';
}

// Event listeners for button clicks
newQuestionButton.addEventListener('click', getQuestion);
showAnswerButton.addEventListener('click', showAnswer);

// Fetch a new question when the page loads
getQuestion();

// Select the share button element
const shareButton = document.getElementById('js-share');

// Function to handle the share button click
function handleShare() {
  // Check if the Web Share API is supported by the browser
  if (navigator.share) {
    navigator.share({
      title: 'Check out this trivia question!',
      text: 'Can you answer this?',
      url: window.location.href
    })
      .then(() => console.log('Shared successfully'))
      .catch(error => console.error('Error sharing:', error));
  } else {
    alert('Web Share API is not supported in this browser.');
  }
}

// Event listener for share button click
shareButton.addEventListener('click', handleShare);
