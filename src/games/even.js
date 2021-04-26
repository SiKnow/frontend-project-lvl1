import { getRandom } from '../utilities.js';

export const isEven = () => {
  const randomNumber = getRandom(100);
  let result = 'no';
  if (randomNumber % 2 === 0) {
    result = 'yes';
  }
  return [result, randomNumber];
};

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
