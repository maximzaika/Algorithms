class Solution {
  public void moveZeroes(int[] nums) {
    int n = nums.length;
    int i = 0;
    int j = 1;
    
    while (j != n && n != 1) {
      int p1 = nums[i];
      int p2 = nums[j];
        
      if (p1 == 0 && p2 != 0) {
        // if i is 0 and j isn't then swap and increment
        nums[i] = p2;
        nums[j] = p1;

        i++;
        j++;
      } else if (p1 != 0) {
        // if i isn't 0 then increment both i and j
        i++;
        j++;
      } else {
        // increment j only
        j++;
      }
    }
  }
}