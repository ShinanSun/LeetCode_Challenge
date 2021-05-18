/**
 * @param {string} s
 * @return {boolean}
 abcba
 */
var validPalindrome = function(s) {
    var l = 0, r = s.length-1;
    
    while (l < r){
        if (s[l] !== s[r]) {
            return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1)
        }
        l++;
        r--;  
    }
    
    return true;
};

var isPalindrome = (s, l, r) => {
    
    while (l < r) {
        if (s[l] !== s[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}