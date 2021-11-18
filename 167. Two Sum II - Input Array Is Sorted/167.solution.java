class Solution {
  public int[] twoSum(int[] numbers, int target) {
    int p1 = 0;
    int p2 = numbers.length - 1;
    
    while (numbers[p1] + numbers[p2] != target) {
      if (numbers[p2] > target || numbers[p1] + numbers[p2] > target) p2--;
      else p1++;
    }
    
    if (numbers[p1] + numbers[p2] == target) {
      int[] output = {p1 + 1, p2 + 1};
      return output;
    } else {
      int[] output = {-1, -1};
      return output;
    }
  }
}