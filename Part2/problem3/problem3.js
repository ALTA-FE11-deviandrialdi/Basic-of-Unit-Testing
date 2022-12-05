function primeNumber(number) {
  // Your Code Here

  let pembagi = 0;
  for (let i = 1; i <= number; i++) {
    number % i === 0 && pembagi++;
  }

  return pembagi === 2;
}

module.exports = primeNumber;
