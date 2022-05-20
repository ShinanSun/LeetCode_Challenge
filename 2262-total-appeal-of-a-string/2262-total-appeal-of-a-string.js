/**
 * @param {string} s
 * @return {number}
 input = 'ab x x xb x x bxx'
                  ^
        -1 i  3
 
 */
var appealSum = function(s) {
    let n = s.length;
    let seen = {};
    const leftBoundary = new Array(n).fill(-1);
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        
        if (seen[curr] >= 0) {
            leftBoundary[i] = seen[curr];
        }
        
        seen[curr] = i;
    }
    
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count += (i - leftBoundary[i]) * (n - i);
    }
    
    return count;
};