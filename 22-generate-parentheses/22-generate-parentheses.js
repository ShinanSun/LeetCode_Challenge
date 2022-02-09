/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    
    dfs([], 0, 0, n, result);
    return result;
};

const dfs = function (curr, open, close, n, result) {
    if (curr.length === n * 2) {
        result.push(curr.join(''))
        return;
    }
    
    if (open < n) {
        curr.push('(');
        dfs(curr, open + 1, close, n, result);
        curr.pop();
    }
    if (close < open) {
        curr.push(')');
        dfs(curr, open, close + 1, n, result);
        curr.pop();
    }
    
}