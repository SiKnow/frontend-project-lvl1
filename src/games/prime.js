import { getRandom } from '../utilities.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const num = getRandom(100);
  const result = isPrime(num) ? 'yes' : 'no';

  return [result, num];
};

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
