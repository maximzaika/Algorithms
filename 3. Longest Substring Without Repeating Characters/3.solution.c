class Solution {
public:
    int lengthOfLongestSubstring(string s) {
      int n = s.size(), ans = 0, i = 0;
      std::map<char, int> charMap;
      
      for (int j = 0; j < n; j++) { 
        char _char = s[j];
        if (charMap.find(_char) != charMap.end()) {
          i = max(charMap[_char], i);
          // since it exists, get the second part (value) and replace with J + 1
          charMap.find(_char)->second = j + 1;
        } else {
          // create and insert a new pair <char, int>
          charMap.insert ( std::pair<char, int>(_char, j + 1) );
        }
        ans = max(ans, j - i + 1);        
      }
      
      return ans;
    }
};