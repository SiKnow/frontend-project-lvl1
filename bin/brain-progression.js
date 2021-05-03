#!/usr/bin/env node
import start from '../src/index.js';
import progression, { rule } from '../src/games/progression.js';

start(rule, progression);
