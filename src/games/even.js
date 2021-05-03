import getRandomNumber from '../utilities.js';

export const isEven = () => {
  const question = getRandomNumber(1, 100);
  let answer = 'no';
  if (question % 2 === 0) {
    answer = 'yes';
  }
  return [question, answer];
};

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
