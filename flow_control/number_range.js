const numberRange = ((num) => {
  if (num < 0) {
    console.log(`${num} is less than 0.`);
    return;
  } else if (num <= 50) {
    console.log(`${num} is less than or equal to 50.`);
    return;
  } else if (num > 50 && num <= 100) {
    console.log(`${num} is between 51 and 100.`);
    return;
  } else {
    console.log(`${num} is greater than 100.`);
    return;
  }
})


numberRange(25);
