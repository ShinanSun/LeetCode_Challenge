/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var hash = {}
 
    for (var i = 0; i < s.length; i++) {
        var char = s[i]
        if (!hash[char]) {
            hash[char] = 1
        } else {
            hash[char] ++;
        }
    }
    
    for (var j = 0; j < s.length; j++){
        if (hash[s[j]] === 1){
            return j
        }
    }
    
    return -1;
};