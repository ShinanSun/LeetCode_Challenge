/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dict = {};
    for (let word of wordDict) {
        dict[word] = true;
    }
    
    return dfs(s, dict, {});
};

const dfs = function(s, dict, cache) {
    if (cache[s] !== undefined) return cache[s];
    if (dict[s]) {
        cache[s] = true;
        return true;
    }
    
    for (let i = 0; i < s.length; i++) {
        let left = s.slice(0, i + 1);
        let right = s.slice(i + 1);
        if (dict[left] && dfs(right, dict, cache)) {
           cache[s] = true; 
           return true;
        }
    }
    
    cache[s] = false;
    return false;
}