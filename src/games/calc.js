import { getRandom } from '../utilities.js';

export const calculate = () => {
  const rightOperand = getRandom(10);
  const leftOperand = getRandom(10);

  let result = 0;

  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${leftOperand} ${operator} ${rightOperand}`;

  switch (operator) {
    case '+':
      result = String(leftOperand + rightOperand);
      break;
    case '-':
      result = String(leftOperand - rightOperand);
      break;
    default:
      result = String(leftOperand * rightOperand);
      break;
  }
  return [result, question];
};

export const rules = 'What is the result of the expression?';
