/**
 * @param {string} s
 * @param {string} t
 * @return {string}

build map called need 
have track if satisfied the need. 
minLen, 
minStr, 
left, move fast as we possible can. 
    if we satified our need, need === have, 
        now and first update our case,
        left increment till need !== have, 
            if s[left] in need, we need to decrement our need count, and may decrease the have count. 
    
right, move one at a time. 
 
 */
var minWindow = function(s, t) {
    const need = {};
    for (let char of t) {
        need[char] = need[char] ? ++need[char] : 1;
    }
    let have = 0;
    let minLen = Infinity, minStr = '';
    
    let left = 0;
    //assume i is our right pointer. 
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (need[curr] === undefined) continue;
        
        need[curr]--;
        if (need[curr] === 0) have++;
        
        while(left <= i && Object.keys(need).length === have) {
            //first update our minLen and minStr
            if (i - left + 1 < minLen) {
                minLen = i - left + 1;
                minStr = s.slice(left, i + 1);
            }
            
            // move left pointer as far as we can, till break the need == have balance.
            let movedChar = s[left];
            if (need[movedChar] !== undefined) {
                need[movedChar]++;
                if (need[movedChar] === 1) have--;
            }
            
            left++;
        }
    }
    
    
    return minStr;
};