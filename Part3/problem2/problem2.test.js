const joinArrayRemoveDuplicate = require("./problem2");

test("test case 1", () => {
  expect(
    joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])
  ).toEqual(["apel", "anggur", "lemon", "leci", "nanas"]);
});

test("test case 2", () => {
  expect(
    joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"])
  ).toEqual(["samsung", "apple", "sony", "xiaomi"]);
});

test("test case 3", () => {
  expect(
    joinArrayRemoveDuplicate(
      ["football", "basketball"],
      ["basketball", "football"]
    )
  ).toEqual(["football", "basketball"]);
});
