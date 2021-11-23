class Solution {
  // s = "abcabcbb"
  public int lengthOfLongestSubstring(String s) {
    // ans -> calculates the length of the longest substring (should never exceed)
    // // stores passed character i + 1
    int n = s.length(), ans = 0, i = 0;
    Map<Character, Integer> map = new HashMap<>();
    
    for (int j = 0; j < n; j++) {
      // iter 0:
      //   if -> false ("a" isn't in the history)
      //   ans = max(0, 0 - 0 + 1) = 1
      //   history = {"a" : 1}
      // iter 1:
      //   if -> false ("b" isn't in the history)
      //   ans = max(1, 1 - 0 + 1) = 2
      //   history = {"a": 1, "b": 2}
      // iter 2:
      //   if -> false ("c" isn't in the history)
      //   ans = max(2, 2 - 0 + 1) = 3
      //   history = {"a": 1, "b": 2, "c": 3}
      // iter 3:
      //   if -> true ("a" is in the history) -> i = max(1, 0) = 1
      //   ans = max(3, 3 - 1 + 1) = 3
      //   history = {"a": 4, "b": 2, "c": 3}
      // iter 4:
      //   if -> true ("b" is in the history) -> i = max(2, 1) = 2
      //   ans = max(3, 4 - 2 + 1) = 3
      //   history = {"a": 4, "b": 5, "c": 3}
      // iter 5:
      //   if -> true ("c" is in the history) -> i = max(3, 2) = 3
      //   ans = max(3, 5 - 3 + 1) = 3
      //   history = {"a": 4, "b": 5, "c": 6}
      // iter 6:
      //   if -> true ("b" is in the history) -> i = max(5, 3) = 5
      //   ans = max(3, 6 - 5 + 1) = 3
      //   history = {"a": 4, "b": 7, "c": 6}
      // iter 7:
      //   if -> true ("b" is in the history) -> i = max(7, 5) = 7
      //   ans = max(3, 7 - 7 + 1) = 3
      //   history = {"a": 4, "b": 8, "c": 6}
      char _char = s.charAt(j);
      if (map.containsKey(_char)) i = Math.max(map.get(_char), i);
      ans = Math.max(ans, j - i + 1);
      map.put(_char, j + 1);
    }
    return ans;
  }
}