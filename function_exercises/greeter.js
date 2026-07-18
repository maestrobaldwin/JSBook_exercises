function getName (prompt) {
  let rlsync = require('readline-sync');
  let name = rlsync.question(prompt);
  return name;
}

let firstName = getName("What is your first name? \n");
let lastName = getName("What is your last name?\n");
console.log(`Welcome to you, ${firstName} ${lastName}! You are going to be a coder! Now let us multiply.`);

function getNumbers (prompt) {
  let rlsync = require('readline-sync');
  let number = rlsync.question(prompt);
  return number;
}

function multiply (number1, number2) {
  return number1 * number2;
}

let number1 = getNumbers("What is your first number?\n");
let number2 = getNumbers("What is your second number?\n");
console.log(`${number1} multiplied by ${number2} equals ${multiply(number1, number2)}!`);
