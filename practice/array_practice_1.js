// Filter and transform - create a new array containing the squares of only the even numbers
/*
let numbers = [3, 8, 12, 5, 7, 14, 21, 6];

let squareOfEvens = (array => {
  let evens = array.filter(el => el % 2 === 0);
  let squares = evens.map(num => num * num);
  return squares;
})

console.log(squareOfEvens(numbers));
*/

// Nested Array - Produce an array containing the average score for each nested array
let scores = [
  [85, 92, 78],
  [90, 80, 95],
  [76, 81, 89],
];

let average = (outerArray => {

  return outerArray.map(innerArray => {
    //average() returns the array created by map()

    let sum = innerArray.reduce((prev, curr) => {
      return prev + curr;
    //reduce() returns the running total
    }, 0);
      
    let avg = sum / innerArray.length;
    
      return avg;
      //^^^ map() needs THIS return to know what to put into the new array
    })
  });


console.log(average(scores));
