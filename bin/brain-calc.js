#!/usr/bin/env node
import start from '../src/index.js';
import { rules, calculate } from '../src/games/calc.js';

start(rules, calculate);
