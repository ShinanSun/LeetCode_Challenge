/**
 * @param {number} n
 * @return {number}
 0, 1, 1, 2, 3, 5, 8
 */
const cache = new Map();
var fib = function(n) {
    if (cache.has(n)) return cache.get(n);
    
    if (n < 2) {
        return n;
    }
    
    let currSum = fib(n - 1) + fib(n - 2);
    cache.set(n, currSum)
    return currSum;
};