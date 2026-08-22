//write some code to replace the value 6 in the following array with 66
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 10, 12]
];

/* searching the array
for (let i = 0; i < arr.length; i += 1) {
  for (let j = 0; j < arr[i].length; j += 1) {
    if (arr[i][j] === 6) {
      arr[i].splice([j], 1, 606)
    }
  }
}

*/

//without searching the array
arr[1][3] = 606;
console.log(arr);