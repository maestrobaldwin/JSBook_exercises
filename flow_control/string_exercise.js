const stringCaps = ((phrase) => {
  if (phrase.length > 10) {
    console.log(phrase.toUpperCase());
    return;
  } else {
    console.log(phrase);
    return;
  }
});

stringCaps("bob");