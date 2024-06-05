const lengthOfLongestSubstring = (s) => {
  let start = 0;
  let result = 0;
  let charIndex = {};
  for (let end = 0; end < s.length; end++) {
    currentChar = s[end];
    if (currentChar in charIndex && charIndex[currentChar] >= start) {
      start = charIndex[currentChar] + 1;
    }
    charIndex[currentChar] = end;
    result = Math.max(result, end - start + 1);
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
