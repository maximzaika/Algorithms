class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i = 0
        j = 0
        
        while j != n and n != 1:
          p1 = nums[i]
          p2 = nums[j]
          
          if p1 == 0 and p2 != 0:
            nums[i] = p2
            nums[j] = p1
            i += 1
            j += 1
          elif p1 != 0:
            i += 1
            j += 1
          else:
            j += 1