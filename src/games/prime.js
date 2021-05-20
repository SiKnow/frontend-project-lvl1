import getRandomNumber from '../utilities.js';

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

const getRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => ({ rule, getRound });
