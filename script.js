
const randomGuess = Math.floor(Math.random() * 26) + 1;
console.log(randomGuess);
const guessButton = document.getElementById('guessButton');




guessButton.addEventListener('click', (event) => {
  event.preventDefault();
  const userGuess = parseInt(document.getElementById('guessInput').value);

  if (userGuess === randomGuess) {
    alert(`You won! The actual guess was ${randomGuess}`);
    location.reload(); // Refresh the page
  } else if (userGuess < randomGuess - 3) {
    alert('You are too low. The actual guess was ' + randomGuess);
    location.reload();
  } else if (userGuess > randomGuess + 3) {
    alert('You are too high. The actual guess was ' + randomGuess);
    location.reload();
  } else if (Math.abs(userGuess-randomGuess)= 2) { 
alert ('Gosh you were so close, the number was ' + randomGuess);
location.reload();
  }
   else {
    alert('You lost. The actual guess was ' + randomGuess);
    location.reload();
  }
});
const guessInput = document.getElementById('guessInput');
guessInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    guessButton.click(); // Simulate clicking the guess button
  }
});
 guessInput.addEventListener('keyup' , (event)=>{
if (guessInput === ' ' ){
    guessButton.click();
} 
 });