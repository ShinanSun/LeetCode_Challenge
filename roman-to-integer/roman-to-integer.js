/**
 * @param {string} s
 * @return {number}
 */
const romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// O(log n) logarithmic time complexity at best, O(n) linear time complexity at worst
// O(1) constant space complexity
function romanToInt(s) {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    let curVal = romanValues[s[i]];
    let nextVal = romanValues[s[i + 1]];

    if (nextVal) {
      if (curVal >= nextVal) {
        ans += curVal;
      } else {
        ans += nextVal - curVal;
        i++;
      }
    } else {
      ans += curVal;
    }
  }

  return ans;
}