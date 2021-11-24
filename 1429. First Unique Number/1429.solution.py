class FirstUnique:
  def __init__(self, nums: List[int]):
    self.uniques = OrderedDict()
    self.duplicates = OrderedDict()
    for val in nums:
      self.add(val)

  def showFirstUnique(self) -> int:
    if (self.uniques):
      return next(iter(self.uniques))
    return -1

  def add(self, val: int) -> None:
    if val not in self.uniques and val not in self.duplicates:
      self.uniques[val] = None
    else:
      self.uniques.pop(val, None)
      self.duplicates[val] = None


# Your FirstUnique object will be instantiated and called as such:
# obj = FirstUnique(nums)
# param_1 = obj.showFirstUnique()
# obj.add(value)