/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 c = 0  a= 1 b = 0
 
res = ccabba
 
 */
var longestDiverseString = function(a, b, c) {
     const heap = [];
    if (a > 0) heap.push(['a', a]);
    if (b > 0) heap.push(['b', b]);
    if (c > 0) heap.push(['c', c]);

    let str = '';
    while(heap.length) {
        heap.sort((a, b) => b[1] - a[1]);
        if (heap.length === 1) {
            let [char, n] = heap[0];
            let min = Math.min(n, 2);
            for (let i = 0; i < min; i++) {
                str += char;
            }
            
            break;
        }
        let top1 = heap.shift();
        let top2 = heap.shift();
        if (str.length >= 2 && str[str.length - 1] === str[str.length - 2] && str[str.length - 1] !== top2[0]) {
            str += top2[0];
            top2[1]--;
        } else {
            str += top1[0];
            top1[1]--;
        }
        
        if (top1[1] > 0) heap.push(top1);
        if (top2[1] > 0) heap.push(top2);
    }
    
    return str;
};