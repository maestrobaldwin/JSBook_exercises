let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let oddLengths = (array => {
  return array.reduce((filteredLengths, element) => {
    let length = element.length;
    if (length % 2 !== 0) {
      filteredLengths.push(length);
    } 
    return filteredLengths;
  }, []);
})

console.log(oddLengths(arr));