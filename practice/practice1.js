let rlSync = require('readline-sync');
const players = [];
for (let i = 0; i < 5; i+=1) {
  let name = rlSync.question(`Enter your name player ${i+1}.\n`);
  players.push(name);
}

console.log(players);

let onlyTs = players.filter(el => el[0] === "T");
let greeting = onlyTs.map(name => `Welcome to the game ${name}.`);

console.log(greeting);

let noTs = players.filter(el => el[0] !== 'T');
let greeting2 = noTs.map(name => `Welcome ${name}. Your name doesn't start with a T.`);

console.log(greeting2);
