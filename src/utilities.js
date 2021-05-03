export default (num1, num2) => {
  const min = Math.ceil(num1);
  const max = Math.floor(num2);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
