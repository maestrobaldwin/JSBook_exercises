let array = [3, 5, 7];

function sumOfNumbers (array) {
  return array.reduce((prev, curr) => {
    return prev + (curr * curr);},
    0);
}

console.log(sumOfNumbers(array));
