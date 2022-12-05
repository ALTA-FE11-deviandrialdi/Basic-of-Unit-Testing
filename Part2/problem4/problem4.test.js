const palindrome = require("./problem4");

test("test 1", () => {
  expect(palindrome("civic")).toEqual(true);
});
test("test 2", () => {
  expect(palindrome("katak")).toEqual(true);
});
test("test 3", () => {
  expect(palindrome("kasur rusak")).toEqual(true);
});
test("test 4", () => {
  expect(palindrome("kupu-kupu")).toEqual(false);
});
test("test 5", () => {
  expect(palindrome("lion")).toEqual(false);
});
