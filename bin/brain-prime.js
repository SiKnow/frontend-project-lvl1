#!/usr/bin/env node
import start from '../src/index.js';
import isPrime, { rule } from '../src/games/prime.js';

start(rule, isPrime);
