'use strict';

const randNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let number = randNum();

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🚫 No Guess !');
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈 Too High !' : '📉 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Loose !';
      document.querySelector('.score').textContent = 0;
    }
  } else {
    displayMessage('🎉 Correct Guess !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  number = randNum();
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
});
