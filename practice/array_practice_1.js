// Filter and transform - create a new array containing the squares of only the even numbers
let numbers = [3, 8, 12, 5, 7, 14, 21, 6];

let squareOfEvens = (array => {
  let evens = array.filter(el => el % 2 === 0);
  let squares = evens.map(num => num * num);
  return squares;
})

console.log(squareOfEvens(numbers));

// Nested Array - Produce an array containing the average score for each nested array
let scores = [
  [85, 92, 78],
  [90, 80, 95],
  [76, 81, 89],
];

let averages = (array => {
  for (let i = 0; i < array.length; i += 1) {
    let sums = array[i].reduce((prev, curr) => {
      return prev + curr;}, 0);
    for (let j = 0; j < array[i].length; j += 1) {
      return sums / array[i].length;
      }
    }
    })

console.log(averages(scores));
