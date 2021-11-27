/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const visited = grid.map(() => grid[0].map(() => false));
  const x = grid.length;
  const y = grid[0].length;

  const dfs = (r, c) => {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      visited[r][c] ||
      grid[r][c] === 0
    )
      return 0;

    visited[r][c] = true;

    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c - 1) + dfs(r, c + 1);
  };

  let numOfIslands = 0;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      numOfIslands = Math.max(numOfIslands, dfs(i, j));
    }
  }

  return numOfIslands;
};
