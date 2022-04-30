/**
 * @param {string} digits
 * @return {string[]}
 digits = "23"
23
33
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
    dfs(0, [], digits, phoneMap, res);
    return res;
};

const dfs = function(pos, path, digits, phoneMap, result){
    //stoping case;
    if (pos === digits.length) {
        result.push(path.join('')) 
        return; // ['ad', 'ae']
    }
    
        let curr = digits[pos]; //  curr digit = 3
        for (let currChar of phoneMap[curr]) { // 'def'
            path.push(currChar); // ['a', 'e']
            dfs(pos + 1, path, digits, phoneMap, result);
            path.pop();
        }
    
}