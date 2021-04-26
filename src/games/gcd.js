import { getRandom } from '../utilities.js';

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
  const firstNum = getRandom(100);
  const secondNum = getRandom(100);
  const result = String(getGreatestDivisor(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;

  return [result, question];
};

export const rules = 'Find the greatest common divisor of given numbers';
