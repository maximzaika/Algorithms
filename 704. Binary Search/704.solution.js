const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const pivot = Math.floor(left + (right - left) / 2);
    if (nums[pivot] === target) return pivot;
    if (target < nums[pivot]) right = pivot - 1;
    else left = pivot + 1;
  }

  return -1;
};

const testCases = [
  [[-1, 0, 3, 5, 9, 12], 9, 4],
  [[-1, 0, 3, 5, 9, 12], 2, -1],
];

for (let testCase of testCases) {
  const output = search(testCase[0], testCase[1]);

  if (output === testCase[2]) {
    console.log(`Passed [${testCase[0]}], ${testCase[1]} = ${testCase[2]}`);
  } else {
    console.log(
      `Failed [${testCase[0]}], ${testCase[1]}. Expected: ${testCase[2]}, Output: ${output}`
    );
  }
}
