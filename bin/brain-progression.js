#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const getRandom = (max) => Math.round(Math.random() * max);
const getProgression = () => {
  const progression = [];
  let start = getRandom(3);
  const quantity = 10;
  const multiply = getRandom(10);
  for (let i = 1; i <= quantity; i += 1) {
    progression.push(start);
    start += multiply;
  }
  return progression;
};

console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
const name = getName();
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let counter = 0;
let progression = [];

for (let i = 0; i < 3; i += 1) {
  progression = getProgression();
  const hiddenIndex = getRandom(progression.length - 1);
  const hidden = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const arr = progression.join(' ');

  console.log(`Question: ${arr}`);
  const result = Number(readlineSync.question('Answer: '));

  if (result === hidden) {
    console.log('Correct!');
    counter += 1;
  } else if (result !== hidden) {
    console.log(`'${result}' is wrong answer :( Correct answer was '${hidden}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (counter === 3) {
  console.log(`Congratulations, ${name}! You win!`);
}
