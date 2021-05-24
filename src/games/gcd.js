import getRandomNumber from '../utilities.js';

const getGreatestDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGreatestDivisor(num2, num1 % num2);
};

const getRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const answer = String(getGreatestDivisor(num1, num2));
  const question = `${num1} ${num2}`;

  return [question, answer];
};

const rule = 'Find the greatest common divisor of given numbers';

export default () => ({ rule, getRound });
