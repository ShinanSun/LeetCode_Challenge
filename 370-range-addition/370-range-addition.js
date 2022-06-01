/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    const res = new Array(length).fill(0);
    
    for (let [start, end, val] of updates) {
        res[start] += val;
        if (end + 1 < length) res[end + 1] -= val;
        
    }
    
    for (let i = 1; i < length; i++) {
        res[i] = res[i - 1] + res[i];
    }
    
    return res;
};