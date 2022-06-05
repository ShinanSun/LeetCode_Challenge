/**
 * @param {string} digits
 * @return {string[]}
 digits = "23"
23

pos =0
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    let res = [];
    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    

    dfs(0, [], digits, phoneMap, res)
    return res;
};

const dfs = function(depth, path, digits, phoneMap, res) {
    if (depth === digits.length) {
        res.push(path.join(''));
        return;
    }
    
   
    let chars = phoneMap[digits[depth]];
    for (let c of chars) {
        path.push(c);
        dfs(depth + 1, path, digits, phoneMap, res);
        path.pop();
    }

}

