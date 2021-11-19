class Solution {
    public int hammingDistance(int x, int y) {
      // x   = 0 0 0 1
      // y   = 0 1 0 0
      // xor = 0 1 0 1
      int _xor = x ^ y;
      int distance = 0;
      while (_xor != 0) {
        // mask out the rest bits
        //   iter 1:
        //     xor     = 0 1 0 1
        //     1       = 0 0 0 1
        //     xor & 1 = 0 0 0 1 = true
        //   iter 2:
        //     xor     = 0 0 1 0
        //     1       = 0 0 0 1
        //     xor & 1 = 0 0 0 0 = false
        //   iter 3:
        //     xor     = 0 0 0 1
        //     1       = 0 0 0 1
        //     xor & 1 = 0 0 0 1 = true
        if (_xor % 2 == 1) {
          // iter 1:
          //   distance = 1
          // iter 2:
          //   distance = 2
          distance++;
        }
        // iter 1:
        //   xor = 0 0 1 0
        // iter 2:
        //   xor = 0 0 0 1
        // iter 3:
        //   xor = 0 0 0 0
        _xor >>= 1;
      }
      return distance;
    }
}