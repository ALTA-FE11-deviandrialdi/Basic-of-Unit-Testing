function palindrome(string) {
  // your code here
  let len = string.length;
  let mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
module.exports = palindrome;
