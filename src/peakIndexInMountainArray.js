/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const currentNumber = arr[mid];
      const leftNumber = arr[mid - 1];
      const rightNumber = arr[mid + 1];
      
      if (left === right) {
        return mid;
      } else if (currentNumber > leftNumber && currentNumber > rightNumber) {
        return mid;
      } else if(currentNumber < leftNumber) {
        right = mid - 1;
      }else {
        left = mid + 1;
      }
    }
};


const arr = [24,69,100,99,79,78,67,36,26,19];

console.log(peakIndexInMountainArray(arr));