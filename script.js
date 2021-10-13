'use strict';
/*let number = Math.trunc(Math.random() * 20) + 1;
//console.log(number);
const score = 20;
document.querySelector('.number').textContent = number;*/

document.querySelector('.check').addEventListener('click', function () {
  let number = Math.trunc(Math.random() * 20) + 1;
  const score = 20;
  document.querySelector('.number').textContent = number;

  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = 'no numbers';
    document.querySelector('.score').textContent = score;
    score--;
  }
  /*else if(guess === number);{
  document.querySelector('.message').textContent = 'you win';}
  else if(guess > number);{
  document.querySelector('.message').textContent = 'Too High';}
  else if(guess < number){
  document.querySelector('.message').textContent = 'Too low';}
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = number;
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = 'green';
});
