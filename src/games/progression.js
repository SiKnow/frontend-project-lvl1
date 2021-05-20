import getRandomNumber from '../utilities.js';

const getProgression = (start, step, length = 10) => {
  const progression = [];

  for (let i = start; progression.length <= length; i += step) {
    progression.push(i);
  }

  return progression;
};

const hideProgressionValue = (progression, hiddenIndex) => {
  const result = progression;
  result[hiddenIndex] = '..';
  return result.join(' ');
};

const getRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = getProgression(start, step);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);

  const answer = String(progression[hiddenIndex]);
  const question = hideProgressionValue(progression, hiddenIndex);

  return [question, answer];
};

const rule = 'What number is missing in the progression?';

export default () => ({ rule, getRound });
