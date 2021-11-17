/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivot = Math.floor(left + (right - left) / 2);
    if (nums[pivot] === target) return pivot;
    if (target < nums[pivot]) right = pivot - 1;
    else left = pivot + 1;
  }

  return left;
};
