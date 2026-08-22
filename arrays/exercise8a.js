/* VERY HARD:
write a function similar to exercise 6, don't use map or filter, use reduce
Problem: discard the elements with a length that is even, and then keep the elements with an odd lenght */
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = (array => {
  return array.reduce((filteredNumberArray, letters) => {
    let length = letters.length;
    if (length % 2 !== 0) {
      filteredNumberArray.push(length);
    }
    return filteredNumberArray;
  }, []);
  })

console.log(oddLengths(arr));
