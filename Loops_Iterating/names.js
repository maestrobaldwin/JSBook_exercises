/* while loop
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor',];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}
console.log(names);
console.log(upperNames);
*/

// for loop
let names = ['Tony', 'Sam', 'Gina', 'Alfie', 'Todd',];
let upperNames = [];
for (let i = 0; i < names.length; i += 1){
  let capName = names[i].toUpperCase();
  upperNames.push(capName);
  console.log(i);
}

console.log(names);
console.log(upperNames);
