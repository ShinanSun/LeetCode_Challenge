/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    
    let maxCount = 0; //count > 0 is left Parentheses , if count < 0 is right Parentheses. 
    let minCount = 0; // * use right if possible
    
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (curr === '(') {
            maxCount++;
            minCount++;
        } else if (curr === ')') {
            maxCount--;
            minCount--;
        } else {
            maxCount++
            minCount--;
        }
        
        if (maxCount < 0) return false;
        if (minCount < 0) {
            minCount = 0;
        }
        
        
    }
    
    
    return minCount === 0;
};