/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    let memo = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
};