#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const getRandom = () => Math.round(Math.random() * 100);

console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
const name = getName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counter = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandom();
  console.log(`Question: ${randomNumber}`);
  const result = readlineSync.question('Answer: ');

  if (result === 'yes' && randomNumber % 2 === 0) {
    console.log('Correct!');
    counter += 1;
  } else if (result === 'no' && randomNumber % 2 !== 0) {
    console.log('Correct!');
    counter += 1;
  } else if (result === 'yes' && randomNumber % 2 !== 0) {
    console.log('\'yes\' is wrong answer :( Correct answer was \'no\'.');
    console.log(`Let's try again, ${name}!`);
    break;
  } else if (result === 'no' && randomNumber % 2 === 0) {
    console.log('\'no\' is wrong answer :( Correct answer was \'yes\'.');
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (counter === 3) {
  console.log(`Congratulations, ${name}! You win!`);
}
