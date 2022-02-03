/**
 * @param {string} s
 * @return {number}
 "abcabcbb"
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    
    let maxLength = 0;
    let map = {};
    let p = 0;  //p is always the start index of subarray.
    for (let i = 0; i < s.length; i++) {
        let char = s[i]; //i = 4 char is b
        if (map[char] + 1 >= p) {
            p = map[char] + 1;
            
        }
        
        //when no duplicate;
        map[char] = i;
        maxLength = Math.max(maxLength, (i - p + 1))
        //console.log(i, p, char)
    }
    
    return maxLength;
};