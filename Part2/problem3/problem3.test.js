const primeNumber = require("./problem3");

test("test 1", () => {
  expect(primeNumber(11)).toEqual(true);
});

test("test 2", () => {
  expect(primeNumber(13)).toEqual(true);
});

test("test 3", () => {
  expect(primeNumber(17)).toEqual(true);
});

test("test 4", () => {
  expect(primeNumber(20)).toEqual(false);
});

test("test 5", () => {
  expect(primeNumber(35)).toEqual(false);
});
