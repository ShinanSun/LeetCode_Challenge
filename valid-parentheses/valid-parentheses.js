/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let temp;
    for (let bracket of s) {
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket)
            continue;
        }
        temp = stack.pop();
        if (temp === undefined) return false;
        if (temp === '(' && bracket !== ')') {
            return false;
        }
        if (temp === '[' && bracket !== ']') {
            return false;
        }
        if (temp === '{' && bracket !== '}') {
            return false;
        }
    }
    
    return !stack.length
};