const submitBtn = document.querySelector("#submit-btn");
const startGameBtn = document.querySelector("#start-game-btn");
const guessForm = document.querySelector("#guess-form");
const numberInput = guessForm.querySelector("input[name='number-input']");
const guessResult = document.querySelector("#guess-result");
const allGuess = document.querySelector("#all-guess");

const allGuessArr = [];

function generateRandomNumber(lb, ub) {
  // lb - lower bound & ub - upper bound
  return Math.floor(Math.random() * (ub + 1 - lb)) + lb;
}

let randomNumber = generateRandomNumber(1, 100);

guessForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const guessNumber = parseInt(numberInput.value);
  if (randomNumber > guessNumber) {
    guessResult.innerText =
      randomNumber - 3 > guessNumber ? "Too Low" : "You are near";
  } else if (randomNumber < guessNumber) {
    guessResult.innerText =
      randomNumber + 3 < guessNumber ? "Too High" : "You are near";
  } else {
    guessResult.innerText = "You got it! Congrats 🤩";
    submitBtn.disabled = true;
    startGameBtn.disabled = false;
  }

  allGuessArr.push(guessNumber);
  allGuess.innerText = "Your Guesses: " + allGuessArr.join(", ");
  guessForm.reset();
});

startGameBtn.addEventListener("click", () => {
  randomNumber = generateRandomNumber(1, 10);
  submitBtn.disabled = false;
  startGameBtn.disabled = true;
  guessResult.innerText = "";
  allGuess.innerText = "";
  allGuessArr.length = 0;
  numberInput.focus();
});
