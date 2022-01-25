/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    let memo = {};
    let wordPresent = {};
    for (let word of words) {
        wordPresent[word] = true;
    }
    
    let wordChainLength = 0;
    for (let word of words) {
        wordChainLength = Math.max(wordChainLength, dfs(word, wordPresent, memo));
    }
    return wordChainLength;
};

const dfs = function (currWord, wordPresent, memo) {
    // If the currword is encountered previously we just return its value present in the memo.
    if (memo[currWord]) return memo[currWord];
    
    //currword can be count as length of one at first;
    let maxLength = 1;
    for (let i = 0; i < currWord.length; i++) {
        let newWord = currWord.slice(0, i) + currWord.slice(i + 1);
        if (wordPresent[newWord]) {
            maxLength = Math.max(maxLength, 1 + dfs(newWord, wordPresent, memo));
        }
    }
    
    memo[currWord] = maxLength;
    return maxLength;
}