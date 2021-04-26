import readlineSync from 'readline-sync';
import { gamesCount } from './utilities.js';
import welcome from './cli.js';

export default (rules, game) => {
  const name = welcome();
  console.log(rules);

  for (let i = 0; i < gamesCount; i += 1) {
    const [result, question] = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (result !== answer) {
      console.log(`'${answer}' is wrong answer :( Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}! You win!`);
};
