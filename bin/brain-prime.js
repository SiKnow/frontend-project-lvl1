#!/usr/bin/env node
import start from '../src/index.js';
import isPrime, { rules } from '../src/games/prime.js';

start(rules, isPrime);
