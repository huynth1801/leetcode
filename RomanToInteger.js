// 13. Roman to Integer

const romanToInt = function (s) {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      i + 1 < s.length &&
      dictionary[s[i]] < dictionary[s[i + 1]]
    ) {
      result -= dictionary[s[i]];
    } else {
      result += dictionary[s[i]];
    }
  }
  return result;
};

let s = "LVIII";
console.log(romanToInt(s));
