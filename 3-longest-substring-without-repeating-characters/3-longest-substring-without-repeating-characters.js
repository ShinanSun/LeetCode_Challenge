/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let currCount = 0;
        let map = {};
        for (let j = i; j < s.length; j++) {
            if (map[s[j]]) {
                break;
            }
            map[s[j]] = true;
            currCount++;
        }
        maxLength = Math.max(maxLength, currCount);
    }
    
    return maxLength;
};