let names = ['Chris', 'Kevin', 'Tom', 'John', 'Taylor'];
let upperName = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCase = names[index].toUpperCase();
  upperName.push(upperCase);
}

console.log(upperName);