#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const getRandom = (max) => Math.floor(Math.random() * max);

console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
const name = getName();
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

let counter = 0;
const operator = ['+', '-', '*'];

for (let i = 0; i < 3; i += 1) {
  const leftOperand = getRandom(100);
  const rightOperand = getRandom(10);
  let resultOfExpression = 0;
  const currentOp = getRandom(3);
  const current = operator[currentOp];

  switch (currentOp) {
    case 0:
      resultOfExpression = leftOperand + rightOperand;
      break;
    case 1:
      resultOfExpression = leftOperand - rightOperand;
      break;
    case 2:
      resultOfExpression = leftOperand * rightOperand;
      break;
    default:
      break;
  }

  console.log(`Question: ${leftOperand} ${current} ${rightOperand}`);
  const result = Number(readlineSync.question('Your answer: '));

  if (result === resultOfExpression) {
    console.log('Correct!');
    counter += 1;
  } else if (result !== resultOfExpression) {
    console.log(`'${result}' is wrong answer :( Correct answer was '${resultOfExpression}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (counter === 3) {
  console.log(`Congratulations, ${name}! You win!`);
}
