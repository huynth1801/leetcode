// Reverse number
// Input: x = 123
// Output: 321

const reverse = (x) => {
  let reverse = 0;
  while (x !== 0) {
    reverse = reverse * 10 + (x % 10);
    x = (x - (x % 10)) / 10;
  }
  return reverse;
};

console.log(reverse(123));
