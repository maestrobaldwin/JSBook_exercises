let names = ['Taylor', 'Tim', 'Owen', 'Olivia', 'Melissa', 'Tina', 'Tia', 'Tonya', 'Courtney', 'Kalin'];
let tNames = [];
let oNames = [];
names.forEach(name => {
  if (name[0] === 'T') {
    tNames.push(name);
  } else if (name[0] === 'O') {
    oNames.push(name);
  }
  });

console.log(tNames);
console.log(oNames);