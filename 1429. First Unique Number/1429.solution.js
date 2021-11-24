/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
class FirstUnique {
  // nums = [[[2,3,5]],[],[5],[],[2],[],[3],[]]
  // execution order = [2,3,5] = FirstUnique, [5] [2] [3] = add this to FirstUnique, [] showFirstUnique in the FirstUnique
  constructor(nums) {
    // stores unique values
    this.uniques = new Set();
    // stores duplicate values
    this.duplicates = new Set();
    // iterate initial values given
    for (let val of nums) this.add(val);
  }

  /**
   * @return {number}
   */
  showFirstUnique() {
    // gets the first value in the uniques if exists (which is the answer)
    const firstUnique = this.uniques.keys().next().value;
    return firstUnique || -1;
  }

  /**
   * @param {number} value
   * @return {void}
   */
  add(val) {
    // if uniques or duplicates don't have val then add to unique
    if (!this.uniques.has(val) && !this.duplicates.has(val)) {
      this.uniques.add(val);
    } else {
      // if one of the sets have it, then remove from uniques and ad to duplicates
      this.uniques.delete(val);
      this.duplicates.add(val);
    }
  }
}

// nums = [[[2,3,5]],[],[5],[],[2],[],[3],[]]

// iter 1 [2, 3, 5]:
//   uniq = [2, 3 , 5]
//   dupl = []

//   out = null

// iter 2 []:
//   out = unique first key = 2

// iter 3 [5]:
//   uniq = [2, 3]
//   dupl = [5]

//   out = null

// iter 4 []:
//   out = unique first key = 2

// iter 5 [2]:
//   uniq = [3]
//   dupl = [5, 2]

//  out = null

// iter 5 []:
//   out = uniqie first key = 3

// iter 6 [3]:
//   uniq = []
//   dupl = [5, 2, 3]

//   out = null

// iter 7 []:
//   uniq = []
//   dupl = [5, 2, 3]

//   out = -1
