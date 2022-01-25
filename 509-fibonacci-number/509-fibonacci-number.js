/**
 * @param {number} n
 * @return {number}
 0, 1, 1, 2, 3, 5, 8
 */
var fib = function(n) {
    if (n < 2) {
        return n;
    }
    
    return fib(n - 1) + fib(n - 2);
};