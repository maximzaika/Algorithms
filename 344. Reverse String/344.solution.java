class Solution {
  public void reverseString(char[] s) {
    int left = 0;
    int right = s.length - 1;
    
    while (left < right) {
      char leftVal = s[left];
      s[left++] = s[right];
      s[right--] = leftVal;
    }
  }
}