/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // idea is two use two pointers. Firstly, these pointers are i and i+1 (j)
  // increment i if the val nums[i] isn't 0. increment j if val nums[j] isn't 0.
  // Otherwise, if val nums[i] is 0 and val nums[j] isn't then swap and
  // increment i and j. If j is the the last value then break. Example:
  // 1. 0 1 0 3 12
  //    i j        = swap
  // 2. 1 0 0 3 12
  //      i j      = increment j
  // 3. 1 0 0 3 12
  //      i   j    = swap
  // 4. 1 3 0 0 12
  //        i   j  = swap
  // 5. 1 3 12 0 0
  //               = 12 was the last val in the arr hence this is the output
  const n = nums.length;

  let i = 0;
  let j = 1;
  while (j !== n && n !== 1) {
    const p1 = nums[i];
    const p2 = nums[j];

    if (p1 === 0 && p2 !== 0) {
      // if i is 0 and j isn't then swap and increment
      nums[i] = p2;
      nums[j] = p1;

      i++;
      j++;
    } else if (p1 !== 0) {
      // if i isn't 0 then increment both i and j
      i++;
      j++;
    } else {
      // increment j only
      j++;
    }
  }
};
