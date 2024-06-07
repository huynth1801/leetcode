/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  for (let i = 0; i <= strs[0].length; i++) {
    console.log(strs[0][i]);
    if (!strs.every((string) => string[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
