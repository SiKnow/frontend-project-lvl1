import getRandomNumber from '../utilities.js';

const calculate = (leftOperand, rightOperand, operator) => {
  switch (operator) {
    case '+':
      return String(leftOperand + rightOperand);
    case '-':
      return String(leftOperand - rightOperand);
    case '*':
      return String(leftOperand * rightOperand);
    default:
      throw new Error(`Unknow operator: '${operator}'!`);
  }
};

const getRound = () => {
  const rightOperand = getRandomNumber(1, 100);
  const leftOperand = getRandomNumber(1, 100);

  const operators = ['+', '-', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[operatorIndex];

  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const answer = calculate(leftOperand, rightOperand, operator);

  return [question, answer];
};

const rule = 'What is the result of the expression?';

export default () => ({ rule, getRound });
