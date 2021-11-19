class Solution:
  # x = 1, y = 4
  def hammingDistance(self, x: int, y: int) -> int:
      # x   = 0 0 0 1
      # y   = 0 1 0 0
      # xor = 0 1 0 1
      xor = x ^ y
      distance = 0
      while xor:
        #   mask out the rest bits
        #   iter 1:
        #     xor     = 0 1 0 1
        #     1       = 0 0 0 1
        #     xor & 1 = 0 0 0 1 = true
        #   iter 2:
        #     xor     = 0 0 1 0
        #     1       = 0 0 0 1
        #     xor & 1 = 0 0 0 0 = false
        #   iter 3:
        #     xor     = 0 0 0 1
        #     1       = 0 0 0 1
        #     xor & 1 = 0 0 0 1 = true
        if xor & 1:
            # iter 1: 
            #   distance = 1
            # iter 2: 
            #   distance = 2
            distance += 1
        #   iter 1:
        #     xor = 0 0 1 0
        #   iter 2:
        #     xor = 0 0 0 1
        #   iter 3:
        #     xor = 0 0 0 0
        xor = xor >> 1
      return distance