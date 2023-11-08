// const secretNumber = Math.floor(Math.random() * 26) + 1;
// console.log(secretNumber);

// const guessButton = document.getElementById('guessButton');


// guessButton.addEventListener('click', () => {
    
//     const guessedNumber = parseInt(document.getElementById('guessInput').value);


//     console.log(guessedNumber);
// })


// Generate a secret number
const secretNumber = Math.floor(Math.random() * 26) + 1;

// Handle user input and provide feedback
const guessButton = document.getElementById('guessButton');
guessButton.addEventListener('click', () => {
    preventDefault();
  const userGuess = parseInt(document.getElementById('guessInput').value);

  if (userGuess === secretNumber) {
    document.getElementById('feedback').textContent = 'Awesome! You guessed correctly.';
  } else if (userGuess > secretNumber) {
    document.getElementById('feedback').textContent = 'Your guess is too high.';
  } else {
    document.getElementById('feedback').textContent = 'Your guess is too low.';
  }
});
