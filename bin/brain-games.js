#!/usr/bin/env node
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log('May I have your name? ');
const name = getName();
console.log(`Hello, ${name}!`);
