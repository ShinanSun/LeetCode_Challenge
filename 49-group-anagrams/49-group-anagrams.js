/**
 * @param {string[]} strs
 * @return {string[][]}
 for each str;
    str.sort and assign it to the map
 */
var groupAnagrams = function(strs) {
    const map = {};
    for (let str of strs) {
        let sorted = str.split('').sort().join('')
        if (map[sorted]) {
            map[sorted].push(str);
        } else {
            map[sorted] = [str];
        }
    }
    
    let res = [];
    for (let key in map) {
        res.push(map[key])
    }
    
    return res;
};