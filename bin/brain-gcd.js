#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const getRandom = () => Math.round(Math.random() * 100);

const getGreatestDivisor = (num1, num2) => {
  let result = 0;
  for (let i = 0; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
const name = getName();
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers');
let counter = 0;

for (let i = 0; i < 3; i += 1) {
  const randNum1 = getRandom();
  const randNum2 = getRandom();
  console.log(`Question: ${randNum1} ${randNum2}`);
  const result = Number(readlineSync.question('Answer: '));
  const greatestDiv = getGreatestDivisor(randNum1, randNum2);
  if (result === greatestDiv) {
    console.log('Correct!');
    counter += 1;
  } else if (result !== greatestDiv) {
    console.log(`'${result}' is wrong answer :( Correct answer was '${greatestDiv}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (counter === 3) {
  console.log(`Congratulations, ${name}! You win!`);
}