const removeDuplicates = require("./problem3");

test("Test 1 case", () => {
  expect(removeDuplicates([2, 3, 3, 3, 6, 9, 9])).toEqual(4);
});

test("Test 2 case", () => {
  expect(removeDuplicates([2, 3, 4, 5, 6, 9, 9])).toEqual(6);
});

test("Test 3 case", () => {
  expect(removeDuplicates([2, 2, 2, 11])).toEqual(2);
});

test("Test 4 case", () => {
  expect(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])).toEqual(4);
});

test("Test 5 case", () => {
  expect(removeDuplicates([1, 2, 3, 11, 11])).toEqual(4);
});
