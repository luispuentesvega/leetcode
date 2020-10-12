const { search } = require("./binarySearch");

test("Should return 4 when [-1, 0, 3, 5, 9, 12] is given with a target of 9", () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  expect(search(nums, target)).toBe(4);
});

test.only("Should return 4 when [-1,0,3,5,9,12] is given with a target of 2", () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 2;
  expect(search(nums, target)).toBe(-1);
});
