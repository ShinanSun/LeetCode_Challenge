/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false;
    
    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let [x, y] = findIndex(mid, n);
        
        if (matrix[x][y] === target) return true;
        if (matrix[x][y] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};


const findIndex = function(idx, c) {
    let row = Math.floor(idx / c);
    let col = idx % c;
    
    return [row, col];
}
