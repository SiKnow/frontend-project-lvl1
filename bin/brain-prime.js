#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const getRandom = () => Math.round(Math.random() * 100);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
const name = getName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let counter = 0;

for (let i = 0; i < 3; i += 1) {
  const number = getRandom();

  console.log(`Question: ${number}`);
  const result = readlineSync.question('Answer: ');

  if (isPrime(number)) {
    if (result === 'yes') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log('\'no\' is wrong answer :( Correct answer was \'yes\'.');
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (!isPrime(number)) {
    if (result === 'no') {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log('\'yes\' is wrong answer :( Correct answer was \'no\'.');
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}

if (counter === 3) {
  console.log(`Congratulations, ${name}! You win!`);
}
