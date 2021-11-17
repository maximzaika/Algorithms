class Solution {
public:
    int firstBadVersion(int n) {
        int pivot, left = 0, right = n;
      
        while (left <= right) {
          pivot = left + (right - left) / 2;
          if (isBadVersion(pivot)) {
            right = pivot - 1;
          } else {
            left = pivot + 1;
          }
        }
      
        return left;
    }
};