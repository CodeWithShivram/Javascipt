'use strict';

let secretNumber = Math.round(Math.random() * 20);
const clickButton = document.querySelector('.check');
const useGuess = document.querySelector('.guess');
const num = document.querySelector('.number');
const message = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const again = document.querySelector('.again');
const clearButton = document.querySelector('.clear');

let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
highscoreElement.textContent = highscore;
console.log(secretNumber);

clickButton.addEventListener('click', () => {
  let tempValue = Number(useGuess.value);
  checkGuess(tempValue);
});

again.addEventListener('click', () => {
  resetGame(false);
});

clearButton.addEventListener('click', () => {
  localStorage.removeItem('highscore');
  highscore = 0;
  highscoreElement.textContent = highscore;
});

function checkGuess(tempValue) {
  if (isNaN(tempValue) || tempValue < 1 || tempValue > 20) {
    message.textContent = 'Enter a valid number between 1 and 20!';
  } else if (secretNumber === tempValue) {
    message.textContent = 'Correct Guess!';
    score += 20;
    scoreElement.textContent = score;
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
      localStorage.setItem('highscore', highscore);
    }
    resultDisplay(tempValue);
    setTimeout(() => resetGame(true), 2000); // Delay of 2 seconds before resetting the game
  } else if (secretNumber > tempValue) {
    message.textContent = 'Too Low!';
  } else if (tempValue > secretNumber) {
    message.textContent = 'Too High!';
  }
}

function resultDisplay(tempValue) {
  num.textContent = secretNumber;
  num.style.backgroundColor = '#60b347';
}

function resetGame(keepScore) {
  secretNumber = Math.round(Math.random() * 20);
  message.textContent = 'Start guessing...';
  num.textContent = '?';
  num.style.backgroundColor = '#222';
  useGuess.value = '';
  if (!keepScore) {
    score = 0;
    scoreElement.textContent = score;
  }
}
