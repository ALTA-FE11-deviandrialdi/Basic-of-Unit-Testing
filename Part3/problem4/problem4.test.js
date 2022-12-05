const meanMedian = require("./problem4");

test("Test case 1", () => {
  expect(meanMedian([1, 2, 3, 4])).toEqual("2.5 2.5");
});

test("Test case 3", () => {
  expect(meanMedian([1, 2, 3, 4, 5])).toEqual("3 3");
});

test("Test case 3", () => {
  expect(meanMedian([7, 8, 9, 13, 15])).toEqual("10.4 9");
});

test("Test case 4", () => {
  expect(meanMedian([15, 20, 30, 60, 120])).toEqual("49 30");
});
