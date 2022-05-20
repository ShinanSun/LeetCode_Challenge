/**
 * @param {string} s
 * @return {number}
 input = 'ABAB'
 lastSeen = {}; // last time when we see the char;
 left = [-1, -1, 0, 1]
 right = [2, 3, 4, 4]
 
 for each index i;
 count += (i - left[i]) * (right[i] - i);
 
 */
var uniqueLetterString = function(s) {
    const n = s.length;
    let seen = {}; // index last time when we see the char; constant space;
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        
        if (seen[curr] >= 0) {
            left[i] = seen[curr];
        }
        seen[curr] = i;
    }
    
    //reset seen;
    seen = {};
    for (let j = s.length - 1; j >= 0; j--) {
        let curr = s[j];
        if (seen[curr] < n) {
            right[j] = seen[curr];
        }
        
        seen[curr] = j;
    }
    
    let count = 0;
    for (let i = 0; i < n; i++) {
        count += (i - left[i]) * (right[i] - i);
    }
    
    return count;
    
};