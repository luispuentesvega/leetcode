const numbersAllowed = {
  min: Math.pow(-2, 31),
  max: Math.pow(2, 31) - 1,
};


const reverse = x => {
  let arr = Array.from(String(x)).reverse();
  if (arr[arr.length -1] === '-') {
    arr.unshift(arr.pop());
  }
  const number = +arr.join("");

  if (number < numbersAllowed.min || number > numbersAllowed.max) {
    return 0;
  }
  return number;
};

module.exports = reverse;