/**
 * @param {number[]} scores
 * @param {number[][]} edges
 * @return {number}
 */
var maximumScore = function(scores, edges) {
    const neighbors = {}
    for (let [a, b] of edges) {
        neighbors[a] !== undefined ? neighbors[a].push([b, scores[b]]) : neighbors[a] = [[b, scores[b]]];
        neighbors[b] !== undefined ? neighbors[b].push([a, scores[a]]) : neighbors[b] = [[a, scores[a]]];
        
        neighbors[a].sort((a, b) => b[1] - a[1]);
        neighbors[b].sort((a, b) => b[1] - a[1]);

        if (neighbors[a].length > 3) {
            neighbors[a].pop()
        }
        
        if (neighbors[b].length > 3) {
            neighbors[b].pop()
        }
    }
    
 //  console.log(neighbors)
    let res = -1;
    for (let [a, b] of edges) {
        let scoreA = scores[a]; 
        let scoreB = scores[b];
        for (let [c, scoreC] of neighbors[a]) {
            for (let [d, scoreD] of neighbors[b]) {
                if (scoreA + scoreB + scoreC + scoreD > res && new Set([a, b, c, d]).size === 4) {
                    res = scoreA + scoreB + scoreC + scoreD;
                }
            }
        }
    }
    
    
    return res;
};