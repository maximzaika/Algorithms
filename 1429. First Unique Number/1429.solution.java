class FirstUnique {
  private Set<Integer> duplicates = new LinkedHashSet<>();
  private Set<Integer> uniques = new LinkedHashSet<>();
  
  public FirstUnique(int[] nums) {
    for (int val : nums) {
      this.add(val);
    }
  }
    
  public int showFirstUnique() {
    if (!uniques.isEmpty()) return uniques.iterator().next();
    return -1;
  }
    
  public void add(int val) {
    if (!uniques.contains(val) && !duplicates.contains(val)) {
      uniques.add(val);
    } else {
      uniques.remove(val);
      duplicates.add(val);
    }
  }
}