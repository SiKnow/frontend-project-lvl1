#!/usr/bin/env node
import start from '../src/index.js';
import { rules, isEven } from '../src/games/even.js';

start(rules, isEven);
