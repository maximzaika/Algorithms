class Solution(object):
  def maxAreaOfIsland(self, grid):
    seen = set()
    def dfs(r, c):
      if not (0 <= r < len(grid) and 0 <= c < len(grid[0])
              and (r, c) not in seen and grid[r][c]):
          return 0
      seen.add((r, c))
      return (1 + dfs(r+1, c) + dfs(r-1, c) +
              dfs(r, c-1) + dfs(r, c+1))

    return max(dfs(r, c)
               for r in range(len(grid))
               for c in range(len(grid[0])))