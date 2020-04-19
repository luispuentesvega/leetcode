const reverseInteger = require('./reverseInteger');

test('reverse 123 to equal 321', () => {
  expect(reverseInteger(123)).toBe(321);
});

test('reverse -123 to equal -321', () => {
  expect(reverseInteger(-123)).toBe(-321);
});

test('reverse 120 to equal 21', () => {
  expect(reverseInteger(120)).toBe(21);
});