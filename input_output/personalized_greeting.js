function getName(prompt){
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName("What's your first name \n");
let lastName = getName("What's your last name \n");
console.log(`Welcome and greetings ${firstName} ${lastName}. Now let us multiply.`);

function getNumber(prompt){
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let number1 = getNumber("What is your first number? \n");
let number2 = getNumber("What is your second number? \n");
console.log(`${number1} multiplied by ${number2} equals ${number1 * number2}. Thanks for playing.`);




/*
let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name \n");
let lastName = rlSync.question("What's your last name \n");

function greeting () {
  console.log(`Hello and welcome ${firstName} ${lastName}!`);
}

greeting();

console.log(`Hello, ${firstName} ${lastName}!`);
*/

