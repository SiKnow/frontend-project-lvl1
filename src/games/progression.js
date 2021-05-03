import getRandomNumber from '../utilities.js';

const getProgression = () => {
  const progression = [];
  let start = getRandomNumber(1, 5);
  const quantity = 10;
  const multiply = getRandomNumber(1, 10);
  for (let i = 1; i <= quantity; i += 1) {
    progression.push(start);
    start += multiply;
  }
  return progression;
};

export default () => {
  const progression = getProgression();
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export const rule = 'What number is missing in the progression?';
