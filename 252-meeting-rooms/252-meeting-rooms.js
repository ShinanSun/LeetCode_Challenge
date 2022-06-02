/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    let starts = [];
    let ends = [];
    for (let [s, e] of intervals) {
        starts.push(s);
        ends.push(e);
    }
    
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    
 
    let e = 0;
    for (let s = 1; s < starts.length; s++) {
        if (ends[e] <= starts[s]) {
            e++;
        } else {
            return false;
        }
    }
    
    return true;
};