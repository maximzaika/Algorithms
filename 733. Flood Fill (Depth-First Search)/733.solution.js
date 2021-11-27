/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
  const dfs = (image, r, c, color, newColor) => {
    if (image[r][c] === color) {
      // replace the color with the new color
      image[r][c] = newColor;

      if (r >= 1) dfs(image, r - 1, c, color, newColor);
      if (c >= 1) dfs(image, r, c - 1, color, newColor);
      if (r + 1 < image.length) dfs(image, r + 1, c, color, newColor);
      if (c + 1 < image[0].length) dfs(image, r, c + 1, color, newColor);
    }
  };

  const startingColor = image[sr][sc];
  if (startingColor !== newColor) dfs(image, sr, sc, startingColor, newColor);
  return image;
};
