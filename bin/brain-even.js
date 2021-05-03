#!/usr/bin/env node
import start from '../src/index.js';
import { rule, isEven } from '../src/games/even.js';

start(rule, isEven);
