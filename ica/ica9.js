// Select the new quote button using querySelector
const newQuoteButton = document.querySelector('#js-new-quote');

// Write an event listener to check if the button is clicked
newQuoteButton.addEventListener('click', getQuote);

// Function to fetch a random quote from the API endpoint
function getQuote() {
  const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

  fetch(apiEndpoint)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch quote.');
      }
    })
    .then(data => {
      displayQuote(data.question);
      displayAnswer(data.answer);
    })
    .catch(error => {
      console.error(error);
      alert('Failed to fetch quote. Please try again.');
    });
}

// Function to display the quote text in the HTML element
function displayQuote(quote) {
  const quoteText = document.getElementById('js-quote-text');
  quoteText.textContent = quote;
}

// Function to display the answer text in the HTML element
function displayAnswer(answer) {
    const answerText = document.getElementById('js-answer-text');
    answerText.textContent = answer;
    answerText.style.display = 'none'; // Hide the answer by default
  }
  // Select the "Show me the answer!" button using querySelector
const showAnswerButton = document.querySelector('#js-tweet');

// Write an event listener to check if the button is clicked
showAnswerButton.addEventListener('click', showAnswer);

// Function to show the answer text when the button is clicked
function showAnswer() {
  const answerText = document.getElementById('js-answer-text');
  answerText.style.display = 'block'; // Show the answer
}

