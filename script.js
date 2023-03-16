'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*
let scretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === scretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = scretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > scretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--; //or score -= 1 or score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'you have lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < scretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--; //or score -= 1 or score = score - 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'you have lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

//refactoring above
let scretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayText = function (selector, text) {
  document.querySelector(selector).textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayText('.message', 'No number!');
  } else if (guess === scretNumber) {
    displayText('.message', 'Correct number!');
    displayText('.number', scretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      displayText('.highscore', highScore);
    }
  } else if (guess !== scretNumber) {
    if (score > 1) {
      displayText('.message', guess > scretNumber ? 'Too high!' : 'Too low!');
      score--; //or score -= 1 or score = score - 1
      displayText('.score', score);
    } else {
      displayText('.message', 'you have lost the game!');
      displayText('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scretNumber = Math.trunc(Math.random() * 20) + 1;

  displayText('.message', 'Start guessing...');
  displayText('.number', '?');
  displayText('.score', score);
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
