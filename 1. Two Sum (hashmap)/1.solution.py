class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      # stores the index of the value in the array
      # arr = [2, 7, 11, 15]
      # complement = 9 - 2 = 7 -> 7 not in hashmap then add 2
      # complement = 9 - 7 = 2 -> 2 in hasmap, get its index and current iteration index
      hashmap = {}
      for i in range(len(nums)):
        complement = target - nums[i]
        if complement in hashmap:
          return [i, hashmap[complement]]
        hashmap[nums[i]] = i
      return None