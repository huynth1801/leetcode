// Brute force . BigO = O(n^2)
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

// One-pass hash table
const twoSum = function (arr, target) {
  const indices = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (indices.has(complement)) {
      return [indices.get(complement), i];
    }
    indices.set(arr[i], i);
  }
};

let arr = [2, 7, 11, 15];
let target = 9;
let result = twoSum(arr, target);
console.log(result);
