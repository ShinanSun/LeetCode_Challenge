/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var map = new Map()
    map.set(2, 2);
    map.set(1, 1);
    var result = 0;
    for (var i = 3; i <= n; i++) {
        result = map.get(i-1) + map.get(i-2);
        map.set(i, result)
        
    }
    return map.get(n)
};