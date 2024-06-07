var lengthOfLastWord = function (s) {
  return s.trim().split(" ").slice(-1).toString().length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
