/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 
 */
var wordBreak = function(s, wordDict) {
    const inDict = {};
    for (let word of wordDict) {
        inDict[word] = true;
    }
    const memo = {}
    return dfs(s, inDict, memo);
};

const dfs = function(s, inDict, memo) {
    
    if (memo[s] !== undefined) return memo[s];
    
    
    if (inDict[s]) {
        memo[s] = true;
        return true;
    }
    
    //now split s
    for (let i = 1; i < s.length; i++) {
        let left = s.slice(0, i);
        let right = s.slice(i);
        if (inDict[left] && dfs(right, inDict, memo)) {
            return true;
        }
    }
    memo[s] = false;
    return false;
    
}