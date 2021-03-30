/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return n <= 1;
  }
  let count = 0;
  for (var i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1;
        count++;
      }
      if (i === 0 && flowerbed[1] === 0) {
        flowerbed[i] = 1;
        count++;
      }
      if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }
  return count >= n;
};
