/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left <= right) {
        const currentSum = numbers[left] + numbers[right]; 
        if (currentSum === target) {
            return [left+1, right+1];
        } else if (target > currentSum) {
            left++;
        } else {
            right--;
        }
    }
};

const numbers = [2,3,4];
const target = 5;

console.log(twoSum(numbers, target));