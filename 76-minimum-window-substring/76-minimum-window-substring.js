/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length === 0) return '';
    
    const need = {};
    for (let char of t) {
        need[char] = need[char] ? ++need[char] : 1;
    } 
    
    
    let minLen = Infinity;
    let minStr = null;
    
    // r move one at the time
    // l move fast as possible
    let l = 0;
    let have = 0;
    for (let r = 0; r < s.length; r++) {
        let curr = s[r];
        if (need[curr] === undefined) continue;
      //  console.log(need, have, `left if ${l} and right is ${r}`)
        need[curr]--;
        
        if (need[curr] === 0) have++;
      
        while (l <= r && have === Object.keys(need).length) {
            // now its satified our condition. 
            if (r - l + 1 < minLen) {
                minLen = r - l + 1;
                minStr = s.slice(l, r + 1);
            }
            
            
            //trying move left boundary fast as possible;
            let leftChar = s[l];
            if (need[leftChar] !== undefined) {
                need[leftChar]++;
                if (need[leftChar] === 1) have--;
            } 
            l++;
            
        }
    }
    
    
    
    
    
    return minStr ? minStr : '';
};