/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n;

    while (left <= right) {
      const pivot = Math.floor(left + (right - left) / 2);

      if (isBadVersion(pivot)) {
        right = pivot - 1;
      } else {
        left = pivot + 1;
      }
    }

    return left;
  };
};
