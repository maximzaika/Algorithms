class Solution {
  public void rotate(int[] nums, int k) {
    int n = nums.length;
    k %= n;
    
    // reverse original array
    reverse(nums, 0, n - 1);
    // reverse [0 ... k -1] array (1st part)
    reverse(nums, 0, k - 1);
    // reverse [k ... n - 1] array (2nd part)
    reverse(nums, k, n - 1);
  }
  
  public void reverse(int[] arr, int left, int right) {
    while (left < right) {
      int leftVal = arr[left];
      int rightVal = arr[right];
      arr[left] = rightVal;
      arr[right] = leftVal;
      left++;
      right--;
    }
  }
}