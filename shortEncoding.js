// 820. Short Encoding of Words
// https://leetcode.com/problems/short-encoding-of-words/description/

var minimumLengthEncoding = function (W) {
  let set = new Set(W);
  console.log(set);
  for (let word of W) {
    if (set.has(word)) {
      for (let i = 1; i < word.length; i++) {
        console.log(word.slice(i));
        set.delete(word.slice(i));
      }
    }
  }
  return Array.from(set).join().length + 1;
};

let words = ["time", "me", "bell"];
let indices = minimumLengthEncoding(words);
console.log(indices);
