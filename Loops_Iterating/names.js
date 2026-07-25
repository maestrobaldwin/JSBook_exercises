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
/*
let names = ['Tony', 'Sam', 'Gina', 'Alfie', 'Todd',];
let upperNames = [];
for (let i = 0; i < names.length; i += 1){
  let capName = names[i].toUpperCase();
  upperNames.push(capName);
  console.log(i);
}

console.log(names);
console.log(upperNames);
*/

// suppose we want all names except Alfie
let names = ['Chris', 'Kevin', 'Alfie', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Alfie') {
    continue;
  }
  /* or if (names[index] !== 'Alfie') {
  let upperCaseName = names[index].toUpperCase etc. --> just run the code}
*/

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);

