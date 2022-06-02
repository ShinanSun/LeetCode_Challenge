/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    let res = [];
    let startIndex = 0;
    for (let i = 1; i < intervals.length; i++) {
        let [nextS, nextE] = intervals[i]; //2,6
        if (nextS <= intervals[startIndex][1]) {
            intervals[startIndex][1] = Math.max(nextE, intervals[startIndex][1])
        } else {
            res.push(intervals[startIndex].slice())
            startIndex = i;
        }      
    }
    
    res.push(intervals[startIndex].slice())
    return res;
};