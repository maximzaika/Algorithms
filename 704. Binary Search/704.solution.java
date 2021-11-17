import java.util.Arrays;

class Solution {
  public int search(int[] nums, int target) {
    int pivot, left = 0, right = nums.length - 1;
    while (left <= right) {
      pivot = left + (right - left) / 2;
      if (nums[pivot] == target) return pivot;
      if (target < nums[pivot]) right = pivot - 1;
      else left = pivot + 1;
    }
    return -1;
  }

  public static void main(String[] args) {   
    int[][] testCases = {
      {-1, 0, 3, 5, 9, 12},
      {-1, 0, 3, 5, 9, 12}
    };
    int[][] answers = {{9, 4}, {2, -1}};
    
    for (int i = 0; i < testCases.length; i++) {
      int output = new Solution().search(testCases[i], answers[i][0]);

      if (output == answers[i][1]) {
        System.out.println("Passed: " + Arrays.toString(testCases[i]) + ", " + answers[i][0] + " = " + answers[i][1]);
      } else {
        System.out.println(
          "Failed: " + Arrays.toString(testCases[i]) + ", " + answers[i][0] + ". Expected: " + answers[i][0] + ", Output: " + output
        );
      }
    }
    
  }
}
