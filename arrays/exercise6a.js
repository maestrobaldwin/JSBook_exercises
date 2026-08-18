let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = (array => {
  let lengths = array.map(word => word.length);
  let oddNumbers = lengths.filter(number => number % 2 !== 0);
  return oddNumbers;
});

console.log(oddLengths(arr));
