class FirstUnique {
public:
  map<pair<int,int>,int> uniques;
  unordered_map<int,int> duplicates;
  FirstUnique(vector<int>& nums) {
    for (int i = 0; i < nums.size(); i++) this->add(nums[i]);      
  }

  int showFirstUnique() {
    if(uniques.size() == 0) return -1;
    map<pair<int,int>,int>::iterator itr;
    itr = uniques.begin();
    return itr->first.second;
  }

  void add(int value) {
    if (duplicates.size() != 0 && duplicates.find(value) != duplicates.end()) {
      uniques.erase( { duplicates[value], value } );
    } else {
      duplicates[value] = duplicates.size();
      uniques[ { duplicates.size() - 1, value } ] = 1;
    }
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * FirstUnique* obj = new FirstUnique(nums);
 * int param_1 = obj->showFirstUnique();
 * obj->add(value);
 */