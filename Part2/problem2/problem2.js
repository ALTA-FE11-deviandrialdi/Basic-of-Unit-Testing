function exponentiation(x, n) {
  // your code here
  if (n < 0) {
    return "wrong input";
  } else if (n === 0) {
    return 1;
  } else if (n <= 1) {
    return x;
  } else {
    n--;
    return x * exponentiation(x, n);
  }
}

module.exports = exponentiation;
