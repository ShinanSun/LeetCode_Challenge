/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}// maxHeap size = k, 
 */
var kClosest = function(points, k) {
    for (let i = 0; i < points.length; i++) {
        let [x, y] = points[i];
        points[i].push(x ** 2 + y ** 2)
    }
    
    points.sort((a, b) => a[2] - b[2]);
    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(points[i].slice(0, 2))
    }
    return res;
};