/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) return 0;
    for (var i = 0; i< haystack.length; i++){
        if (haystack[i] === needle[0]){    
            var j = 1;
            var k = i+1;
            while (needle[j] === haystack[k] && k<haystack.length && j<needle.length){
                j++;
                k++
            }
            if (j === needle.length){
                return i
            }
        }
    }
    
    return -1;
};