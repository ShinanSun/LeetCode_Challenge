/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); //sort by start ascending order;
    
    const maxHeap = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        //get max and compare with start;
        let [currS, currE] = intervals[i];
        maxHeap.sort((a, b) => b[1] - a[1]);
        if (currS <= maxHeap[0][1]) {
            let max = maxHeap.shift();            
            let newEnd = Math.max(max[1], currE);
            maxHeap.push([max[0], newEnd])
        } else {
            maxHeap.push(intervals[i])
        }
        
    }
    
    return maxHeap;
};