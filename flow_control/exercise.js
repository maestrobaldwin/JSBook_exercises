/*
const evenOrOdd2 = ((num2) => {
  if (typeof num2 === 'number') {
    if (num2 % 2 === 0) {
     console.log("Even");
     return;
    } else {
      console.log("Odd");
      return;
    }
  } else {
    console.log("Error, please pick a number");
    return;
  }
}
*/

let rlSync = require('readline-sync');
let chosenNumber = Number(rlSync.question("Choose a number!\n"));

function evenOrOdd (num) {
  if (typeof num === 'number') {
  if (num % 2 === 0){
    console.log("Even");
  } else {
    console.log("Odd");
  };
} else {
  console.log("Please provide a number");
}
}

evenOrOdd(chosenNumber);

/*
refactor this statement with an if statement
return foo() ? 'bar' : qux();

My answer:
if (foo() === 'bar') {
  return foo();
} else {
  return qux();
}

correct answer:
if (foo()) {
  return 'bar';
} else {
  return qux();
}
}
*/