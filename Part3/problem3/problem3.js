function removeDuplicates(array) {
  // Your Code Here

  let hapus = [...new Set(array)];
  return hapus.length;
}

module.exports = removeDuplicates;
