function scream(word) {
  words = word + "!!!!!!"
  console.log(words);
}

scream("Yippy");

function multiply (left, right) {
  let product = left * right;
  return product;
}

function getNumber (prompt) {
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let happy = getNumber('Enter first number \n');
let sad = getNumber('Enter second number \n');
console.log(`${happy} * ${sad} = ${multiply(happy, sad)}`);
