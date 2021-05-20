import getRandomNumber from '../utilities.js';

const calculateExpression = (leftOperand, rightOperand, operator) => {
  let result = '';

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
  return result;
};

const getRound = () => {
  const rightOperand = getRandomNumber(1, 100);
  const leftOperand = getRandomNumber(1, 100);

  const operators = ['+', '-', '*'];
  const randomOperator = getRandomNumber(0, operators.length - 1);
  const operator = operators[randomOperator];

  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const answer = calculateExpression(leftOperand, rightOperand, operator);

  return [question, answer];
};

const rule = 'What is the result of the expression?';

export default () => ({ rule, getRound });
