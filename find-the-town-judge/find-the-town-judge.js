/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let set = new Set();
    let counters = new Array(N + 1).fill(0);
    
    for (let [x, y] of trust) {
        set.add(x);
        counters[y]++;
    }
    
    for (var i = 1; i < counters.length; i++) {
        if (!set.has(i) && counters[i] === N - 1) {
            return i;
        }
    }
    
    return -1
};