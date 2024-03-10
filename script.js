let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  const testGuess = Number(guessField.value); // userGuess to be tested
  //test
  if (testGuess >= 1 && testGuess <= 100) {
    userGuess = testGuess;
  // test

    if (guessCount === 1) {
      guesses.textContent = "Your Previous Guesses: ";
    }
    guesses.textContent += userGuess + ", ";

    if (userGuess === randomNumber) {
      lastResult.textContent = "Ta-da! You got it right! You rock!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "Congs!! Your Last guess was exact!";
      lowOrHi.style.color = "green";
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = "!!!Oops!!! GAME OVER!!!";
      setGameOver();
    } else {
      lastResult.textContent = "Oops! Wrong Guess! Try Again";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Oops!! Your Last guess was too low!";
      } else if (userGuess > randomNumber) {
        lowOrHi.textContent = "Oops!! Your Last guess was too high!";
      }
    }

    //test
  } else {
    lastResult.textContent = `${testGuess} is Invalid! Enter Number between 1 and 100`;
    lastResult.style.backgroundColor = "red";
    lowOrHi.textContent = "";
  }

  //test

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  resetButton.setAttribute("class", "reset");
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "whitesmoke";

  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}
