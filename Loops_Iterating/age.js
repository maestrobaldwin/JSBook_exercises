let readlineSync = require('readline-sync');
let age = Number(readlineSync.question("How old are you?\n"));
age = parseInt(age);
console.log(`You are ${age} years old.`);

for (let years = 0; years <= 40; years += 10) {
  console.log(`You are ${age}. In ${years} years, you will be ${age + years} years old.`);
}
  
/* 
  console.log(`You are `)
}
console.log(`You are ${age} years old.`)
console.log(`In ${10} years, you will be ${age + 10} years old.`);
console.log(`In ${20} years, you will be ${age + 20} years old.`);
console.log(`In ${30} years, you will be ${age + 30} years old.`);
console.log(`In ${40} years, you will be ${age + 40} years old.`);
*/