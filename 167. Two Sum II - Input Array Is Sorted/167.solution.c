class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
      int p1 = 0;
      int p2 = numbers.size() - 1;
      
      while (numbers[p1] + numbers[p2] != target) {
        if (numbers[p2] > target || numbers[p1] + numbers[p2] > target) p2--;
        else p1++;
      }
      
      if (numbers[p1] + numbers[p2] == target) {
        return {p1 + 1, p2 + 1};
      } else {
        return {-1, -1};
      }
    }
};