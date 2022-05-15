/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {};
    
    
    for (let i = 0; i < s.length; i++) {
        
        let from = s[i];
        let to = t[i];
        if (map[from] && map[from] !== to) return false;
        map[from] = to;
    }
    map = {};
    for (let i = 0; i < s.length; i++) {
       
        let from = s[i];
        let to = t[i];
        if (map[to] && map[to] !== from) return false;
        map[to] = from;
    }
    
    return true;
};