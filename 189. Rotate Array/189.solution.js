// Time complexity: O(n). n elements are reversed a total of three times.
// Space complexity: O(1). No extra space is used.

const reverse = (arr, left, right) => {
  while (left < right) {
    const leftVal = arr[left];
    const rightVal = arr[right];
    arr[left] = rightVal;
    arr[right] = leftVal;
    left++;
    right--;
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  let tempArr = [...nums];
  const n = nums.length;
  k %= n;

  // reverse original array
  reverse(tempArr, 0, n - 1);
  // reverse [0 ... k -1] array (1st part)
  reverse(tempArr, 0, k - 1);
  // reverse [k ... n - 1] array (2nd part)
  reverse(tempArr, k, n - 1);

  return tempArr;
};

const testCases = [
  [[1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4].toString()],
  [[-1, -100, 3, 99], 2, [3, 99, -1, -100].toString()],
];

for (let testCase of testCases) {
  const output = rotate(testCase[0], testCase[1]);

  if (output.toString() === testCase[2]) {
    console.log(`Passed [${testCase[0]}], ${testCase[1]} = [${testCase[2]}]`);
  } else {
    console.log(
      `Failed [${testCase[0]}], ${testCase[1]}. Expected: ${testCase[2]}, Output: [${output}]`
    );
  }
}
