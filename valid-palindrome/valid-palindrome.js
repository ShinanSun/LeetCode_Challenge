/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     var newStr = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    var reversed = newStr.split('').reverse().join('')
    console.log(reversed);
    if (reversed === newStr){
        return true;
    } else {
        return false;
    }
};