/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let right = s.length - 1;
  let reversedString = "";
  let reversedWord = "";
  while (right > -1) {
    if (s[right] !== " " || right === 0) reversedWord += s[right];

    if (s[right] === " " || right === 0) {
      reversedString = reversedWord + reversedString;
      if (right !== 0) reversedString = " " + reversedString;
      reversedWord = "";
    }

    right--;
  }
  return reversedString;
};
