const letters = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const target = "c";

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currentLetter = letters[mid];

    if (left === right) {
      if (letters[right] <= target) {
        return letters[right + 1] || letters[0];
      }
      return currentLetter;
    } else if (target >= currentLetter) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    if (right < left) {
      right = left;
    }
    if (left > right){
      left = right;
    }
  }
};


console.log(nextGreatestLetter(letters, target));