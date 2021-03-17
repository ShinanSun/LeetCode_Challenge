/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    var count = 0;
    var i = 0; 
    for (let cookie of s) {
        if (g[i] <= cookie) {
            count ++;
            i++;
            if (i >= g.length) {
                break;
            }
        }
    }
    return count;
};