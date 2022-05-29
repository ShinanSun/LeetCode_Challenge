/**
 * @param {number[]} citations
 * @return {number}
 [3,0,6,1,5]
 */
var hIndex = function(citations) {
    const n = citations.length;
    
    const papers = new Array(n + 1).fill(0)
    
    for (let c of citations) {
        let index = Math.min(n, c);
       
        papers[index]++
    }


    let sites = 0;
    for (let k = n; k >= 0; k--) {
        sites += papers[k];
        if (k <= sites) return k;
    }
};