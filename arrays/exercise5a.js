let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

/*
let integers = [];
let findIntegers = things.map(value => {
  if (Number.isInteger(value)) {
    integers.push(value);
  }
})

console.log(integers);
*/

let findIntegers = (value => {
  return value.filter(el => {
    return Number.isInteger(el);
  });
})

console.log(findIntegers(things));