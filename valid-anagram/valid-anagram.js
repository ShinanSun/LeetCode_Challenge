/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    var hashMap = s.split('').reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc
    }, {})
    
    for (let char of t) {
        if (hashMap[char]) {
            hashMap[char] --
        } else {
            return false;
        }
    }
    
    return true;
};