let array = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((prev, curr) => {
    return prev + (curr * curr);},
    0);
}

console.log(sumOfSquares(array));
