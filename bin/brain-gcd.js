#!/usr/bin/env node
import start from '../src/index.js';
import { rule, findGSD } from '../src/games/gcd.js';

start(rule, findGSD);
