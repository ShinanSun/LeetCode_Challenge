/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (!intervals.length) return 0;
    
    let starts = [];
    let ends = [];
    for (let [s, e] of intervals) {
        starts.push(s);
        ends.push(e);
    }
    
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    
    let s = 0, e = 0;
    let minRoom = 0
    let currRoom = 0;
    while(s < starts.length && e < ends.length) {
        if (starts[s] < ends[e]) {
            currRoom++;
            s++
        } else {
            currRoom--;
            e++;
        }
        
        
        minRoom = Math.max(minRoom, currRoom);
    }
    
    return minRoom;
};


//3, 5, 15
//10 20 30