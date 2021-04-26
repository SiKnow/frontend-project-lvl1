#!/usr/bin/env node
import start from '../src/index.js';
import progression, { rules } from '../src/games/progression.js';

start(rules, progression);
