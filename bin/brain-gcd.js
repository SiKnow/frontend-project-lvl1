#!/usr/bin/env node
import start from '../src/index.js';
import { rules, findGSD } from '../src/games/gcd.js';

start(rules, findGSD);
