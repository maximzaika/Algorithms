def listToString(s): 
    return (' '.join(map(str, s)))

def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        pivot = left + (right - left) // 2
        if nums[pivot] == target:
            return pivot
        if target < nums[pivot]:
            right = pivot - 1
        else:
            left = pivot + 1
    return -1

testCases = [
  [[-1, 0, 3, 5, 9, 12], 9, 4],
  [[-1, 0, 3, 5, 9, 12], 2, -1],
]

for testCase in testCases:
  output = search(testCase[0], testCase[1])

  if (output == testCase[2]):
    print("Passed [" + listToString(testCase[0]) + "], " + str(testCase[1]) + " = " + str(testCase[2]))
  else:
    print(
      "Failed [" + listToString(testCase[0]) + " ]," + str(testCase[1]) + ". Expected: " + str(testCase[2]) + " Output: " + str(output)
    )