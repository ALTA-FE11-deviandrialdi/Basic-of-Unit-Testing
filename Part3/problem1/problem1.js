function compareString(a, b) {
  let result = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b[i]) {
      result += a[i];
    }
  }
  return result;
}

module.exports = compareString;
