/**
 * @param {string} s
 * @return {number}
 constriants: is the substring contiguous?
 Does case sensitivity matter?
 if empty string, return 0;
 abccabb
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) return s.length;
    var result = 0, map = {};
    
    for (var i = 0; i < s.length; i++){
        var subStr = s[i]; //a
        map[subStr] = true;
        for (var j = i + 1; j < s.length; j++){
            if (map[s[j]]) { // exist
                map = {};
                j = s.length
            } else {
                map[s[j]] = true;
                subStr = subStr + s[j]
            }
            result = Math.max(result, subStr.length)
        }
    }
    
    return result;
    
};

// const isRepeated = (s) => {
//     var memo = {};
//     for (var l of s){
//         if (memo[l]) {
//             return true;
//         } else {
//             memo[l] = 1;
//         }
//     }
// return false;
// }

//console.log(isRepeated(' ')) // true;