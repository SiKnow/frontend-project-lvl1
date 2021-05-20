import getRandomNumber from '../utilities.js';

const getGreatestDivisor = (num1, num2) => {
  let result = 0;
  for (let i = 0; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
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
