// Step 3: Select the new quote button using querySelector
const newQuoteButton = document.querySelector('#new-quote');

// Step 4: Write an event listener to check if the button is clicked
newQuoteButton.addEventListener('click', getQuote);

// Step 5: Write the function declaration for getQuote
function getQuote() {
  console.log('Button clicked!');

  // Step 6: Add a variable for the API endpoint
  const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

  // Step 7: Use fetch to get a random quote from the endpoint
  fetch(apiEndpoint)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch quote.');
      }
    })
    .then(data => {
      // Step 8: Output the quote to the console
      console.log(data);
      displayQuote(data);
    })
    .catch(error => {
      // Step 9: Output an error message to the console and alert
      console.error(error);
      alert('Failed to fetch quote. Please try again.');
    });
}

// Step 10: Write the displayQuote function
function displayQuote(quote) {
  const quoteText = document.getElementById('js-quote-text');
  quoteText.textContent = quote;
}

// Step 11: Run displayQuote when the page loads
displayQuote(''); // Provide an initial empty quote to clear the previous quote on page load
