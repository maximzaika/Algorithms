/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashmap[complement] === 0 || hashmap[complement])
      return [i, hashmap[complement]];
    hashmap[nums[i]] = i;
  }
  return null;
};
