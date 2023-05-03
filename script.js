
const numberInput = document.getElementById("number-input");
const guessButton = document.getElementById("guess-button");
const result = document.getElementById("result");
let computerGuesses = 5;
let min = 1;
let max = 100;

guessButton.addEventListener("click", function() {
  const targetNumber = parseInt(numberInput.value);

  if (isNaN(targetNumber) || targetNumber < 1 || targetNumber > 100) {
    result.textContent = "Please enter a valid number between 1 and 100";
    return;
  }

  let guess;
  let isGuessCorrect = false;


  for (let i = 0; i < computerGuesses; i++) {
    guess = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("guesses").append(`The computer guessed (${guess})`)
    if (guess === targetNumber) {
      isGuessCorrect = true;
      break;
    }
  }

  if (isGuessCorrect) {
    result.textContent = `The computer guessed your number (${targetNumber}) in ${5 - computerGuesses + 1} attempts. You lose!`;
  } else {
    result.textContent = `The computer was unable to guess your number (${targetNumber}). You win!`;
  }
  computerGuesses = 5;
  min = 1;
  max = 100;
});
