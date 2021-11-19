class Solution:
    def reverseWords(self, s: str) -> str:
      right = len(s) - 1
      reversedString = ""
      reversedWord = ""
      
      while (right >- 1):
        if (s[right] != " " or right == 0):
          reversedWord += s[right]
        
        if (s[right] == " " or right == 0):
          reversedString = reversedWord + reversedString
          if (right != 0):
            reversedString = " " + reversedString
          reversedWord = ""
          
        right -= 1
      
      return reversedString