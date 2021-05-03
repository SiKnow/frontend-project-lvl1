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

export const findGSD = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const answer = String(getGreatestDivisor(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;

  return [question, answer];
};

export const rule = 'Find the greatest common divisor of given numbers';
