import getRandomNumber from '../utilities.js';

export const calculate = () => {
  const rightOperand = getRandomNumber(1, 100);
  const leftOperand = getRandomNumber(1, 100);

  let answer = 0;

  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${leftOperand} ${operator} ${rightOperand}`;

  switch (operator) {
    case '+':
      answer = String(leftOperand + rightOperand);
      break;
    case '-':
      answer = String(leftOperand - rightOperand);
      break;
    default:
      answer = String(leftOperand * rightOperand);
      break;
  }
  return [question, answer];
};

export const rule = 'What is the result of the expression?';
