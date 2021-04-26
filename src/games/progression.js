import { getRandom } from '../utilities.js';

const getProgression = () => {
  const progression = [];
  let start = getRandom(5);
  const quantity = 10;
  const multiply = getRandom(10);
  for (let i = 1; i <= quantity; i += 1) {
    progression.push(start);
    start += multiply;
  }
  return progression;
};

export default () => {
  const progression = getProgression();
  const hiddenIndex = getRandom(progression.length - 1);
  const hidden = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const result = progression.join(' ');

  return [hidden, result];
};

export const rules = 'What number is missing in the progression?';
