/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}return the k most frequent strings.
 the return array has to have length of k;
 */
var topKFrequent = function(words, k) {
    let map = {}
    for (let word of words) {
        if (map[word]) {
            map[word]++
        } else {
            map[word] = 1;
        }
    }
    
    let PQ = [];
    for (let key in map) {
        let obj = {};
        obj.val = key;
        obj.freq = map[key];
        PQ.push(obj);
    }
    
    let res = []
    PQ.sort((a, b) => {
        if (b.freq !== a.freq) {
           return b.freq - a.freq;
        } else {
            return a.val < b.val ? -1 : 1;
        }
    });
    
    while (k > 0) {
        let curr = PQ.shift();
        res.push(curr.val)
        k--;
    }
    
    return res;
};