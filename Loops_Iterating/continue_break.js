let names = ['Taylor', 'Tim', 'Frank', 'Ron', 'Olivia', 'Melissa', 'Owen'];
let upperNames = [];
for (let i = 0; i < names.length; i += 1) {
  if (names[i] !== 'Olivia') {
    let capNames = names[i].toUpperCase();
    upperNames.push(capNames);
  } continue;
}

console.log(upperNames);
