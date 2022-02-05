/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (!strs.length) return [];
    
    const map = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (char of str) {
            let charIndex = char.charCodeAt() - 97;
            count[charIndex]++;
        }
        let key = count.join('#');
        map[key] ? map[key].push(str) : map[key] = [str];
    }
   
    return Object.values(map)
};