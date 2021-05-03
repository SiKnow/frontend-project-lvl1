#!/usr/bin/env node
import start from '../src/index.js';
import { rule, calculate } from '../src/games/calc.js';

start(rule, calculate);
