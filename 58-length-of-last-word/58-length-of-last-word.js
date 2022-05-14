/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    for (let j = s.length - 1; j >= 0; j--) {
        if (s[j] !== ' ') {
            while(s[j] !== ' ' && j >= 0) {
                count++;
                j--
            }
            break;
        }
    }
    
    return count;
};