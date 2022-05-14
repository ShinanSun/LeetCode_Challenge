/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let ret = 0;
    
    while(n !== 0) {
        ret += Math.floor(n / 5);
        n = Math.floor(n / 5);
    }
    
    return ret;
};