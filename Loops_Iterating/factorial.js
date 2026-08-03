/* function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }
  return result;
}

console.log(factorial(8));
*/

function factorial (n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n-1);
}

console.log(factorial(5));
