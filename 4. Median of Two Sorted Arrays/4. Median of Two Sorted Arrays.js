const findMedianSortedArrays = function (nums1, nums2) {
  // best time complexity is O(1)
  // worst time complexity is o(log (m+n))

  // stores the exact values only up until ((length of nums 1 + length of nums 2 - 1) / 2) index
  // example 1:
  //   input [1, 2] [-1, 3]
  //   mergedNums = [1, 2] where 1,2 are medians
  // example 2:
  //   input [1, 10] [-1, 5, 7]
  //   mergedNums = [5] where 5 is the median
  const mergedNums = [];

  const n1Length = nums1.length;
  const n2Length = nums2.length;
  const sumLength = n1Length + n2Length;

  // check whether middle exists:
  // example 1:
  //  input [1, 2] [-1, 3] -> middle of a single value doesn't exist.
  // example 2:
  //  input [1, 10] [-1, 5, 7] -> middle of a single value 5 exists.
  const midExists = sumLength % 2 === 1;

  // check whether nums1 array is empty
  // time complexity = O(1) if returns
  if (!n1Length && n2Length) {
    // get the middle of the array (similar to binary search)
    const mid = Math.floor(0 + (n2Length - 1 - 0) / 2);
    // middle exists, then this is the answer. Example 5
    if (midExists) return nums2[mid];
    // middle doesn't exist then follow the formula of median
    if (!midExists) return (nums2[mid] + nums2[mid + 1]) / 2;
  }

  // check whether nums2 array is empty and do the same as above
  // time complexity = O(1) if returns
  if (n1Length && !n2Length) {
    const mid = Math.floor(0 + (n1Length - 1 - 0) / 2);
    if (midExists) return nums1[mid];
    if (!midExists) return (nums1[mid] + nums1[mid + 1]) / 2;
  }

  // if no empty array then need to iterate arrays

  // get the expect mid index of two combined array
  // example 1:
  //  input [1, 2] [-1, 3] -> middle = floor(1.5) = 1
  // example 2:
  //  input [1, 10] [-1, 5, 7] -> middle = floor(2) = 2
  const mid = Math.floor(0 + (sumLength - 1 - 0) / 2);

  // iterates until it is equal to mid
  let i = 0;

  // create pointer 1 (for nums1) and pointer 2 (for nums2)
  let p1 = 0;
  let p2 = 0;

  while (p1 < n1Length || p2 < n2Length) {
    // if midExits and mergedNums contains a single value (the exact mid) then break
    if (midExists && mergedNums.length === 1) break;
    // if mid doesn't exist and mergedNums contains 2 values then break
    if (!midExists && mergedNums.length === 2) break;

    // if p1 is over the boundaries then work with nums2 array only
    if (p1 > n1Length - 1) {
      // insert in the array only if i is the mid (for 1 val, or i is mid + 1 (for 2 vals)
      if (i === mid || i === mid + 1) mergedNums.push(nums2[p2]);
      p2++;
      i++;
      // skip everything below
      continue;
    }

    // if p2 is over the boudaries then work with nums1 array only
    if (p2 > n2Length - 1) {
      // insert in the array only if i is the mid (for 1 val, or i is mid + 1 (for 2 vals)
      if (i === mid || i === mid + 1) mergedNums.push(nums1[p1]);
      p1++;
      i++;
      // skip everything below
      continue;
    }

    // if p1 and p2 within its boundaries to the same as above
    if (nums1[p1] <= nums2[p2]) {
      if (i === mid || i === mid + 1) mergedNums.push(nums1[p1]);
      p1++;
    } else {
      if (i === mid || i === mid + 1) mergedNums.push(nums2[p2]);
      p2++;
    }

    i++;
  }

  // at this point we should have the exact values inside mergedNums
  if (midExists) return mergedNums[mergedNums.length - 1];
  if (!midExists)
    return (
      (mergedNums[mergedNums.length - 1] + mergedNums[mergedNums.length - 2]) /
      2
    );
};

const testCases = [
  [[1, 3], [2], 2.0],
  [[1, 2], [3, 4], 2.5],
  [[0, 0], [0, 0], 0.0],
  [[], [1], 1.0],
  [[2], [], 2.0],
  [[-4, -1, 4, 6, 10], [2, 6, 8], 5.0],
];

for (let testCase of testCases) {
  const output = findMedianSortedArrays(testCase[0], testCase[1]);

  if (output === testCase[2]) {
    console.log(`Passed [${testCase[0]}] [${testCase[1]}] = ${testCase[2]}`);
  } else {
    console.log(
      `Failed [${testCase[0]}] [${testCase[1]}]. Expected: ${testCase[2]}, Output: ${output}`
    );
  }
}
