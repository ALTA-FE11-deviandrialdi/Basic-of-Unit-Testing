function meanMedian(arrayInput) {
  // Your Code Here

  // let mean
  let total = 0;
  for (let i = 0; i < arrayInput.length; i++) {
    total += arrayInput[i];
  }
  mean = total / arrayInput.length;

  // let median atau nilai tengah
  let Median = 0;
  number = arrayInput.length;

  if (number % 2 === 0) {
    Median = (arrayInput[number / 2] + arrayInput[number / 2 - 1]) / 2;
  } else {
    Median = arrayInput[(number - 1) / 2];
  }
  return String(mean) + " " + String(Median);
}

module.exports = meanMedian;
