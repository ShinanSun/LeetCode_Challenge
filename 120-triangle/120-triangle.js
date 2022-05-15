/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length;
    let memo = new Array(n).fill(0).map(() => new Array(n).fill(null));
    
    const dfs = function(row, col) {
      
        if (row === n - 1) return triangle[row][col];
        if (memo[row][col] !== null) return memo[row][col];
        
        
        memo[row][col] = triangle[row][col] + Math.min(dfs(row + 1, col), dfs(row + 1, col + 1));
       
        return memo[row][col];
    }
   
    return dfs(0, 0)
};


