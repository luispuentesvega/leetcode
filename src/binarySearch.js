
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    console.log("Left:", left);
    console.log("Right:", right);
    let middle = left + Math.floor((right - left) / 2);
    const currentValue = nums[middle];
    if (currentValue === target) {
      return middle;
    }
    else if (target > currentValue) {// Go to the right side
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};
const nums = [-1, 0, 3, 5, 9, 12];
const target = 2;
console.log(search(nums, target));
// module.exports = {
//   search
// };