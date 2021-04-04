/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  let [x1, y1, x2, y2] = rec1;
  let [x3, y3, x4, y4] = rec2;

  if (x3 >= x2 || x4 <= x1) return false;
  if (y3 >= y2 || y4 <= y1) return false;
  if (x1 === x2 || y1 === y2) return false;
  if (x3 === x4 || y3 === y4) return false;
  return true;
};

var findTwoPoint = (rec1, rec2) => {
  let [x1, y1, x2, y2] = rec1;
  let [x3, y3, x4, y4] = rec2;

  var a1 = Math.max(x1, x3);
  var b1 = Math.min(y2, y4);
  var a2 = Math.min(x2, x4);
  var b2 = Math.max(y1, y3);

  return [a1, b1, a2, b2];
};

var result = findTwoPoint([0, 0, 4, 4], [-1, -1, 3, 3]);

console.log(result);
