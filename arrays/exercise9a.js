/* without useing a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays */

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

/*
let hasThree = (arr => {
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] === 3) {
      return true;
    }
  }
});


let isThree = (arr => {
  return arr.forEach(num => {
    return if (num === 3)
  })
});


  console.log(isThree(numbers1));

  forgot about includes
*/

console.log(numbers1.includes(3));

