/**
 * @param {number[]} time
 * @return {number}
 */


const numPairsDivisibleBy60 = function(time) {
    const reminder = new Array(60).fill(0);
    let count = 0;
    for (let t of time) {
        if (t % 60 === 0) {
            count += reminder[0];
        } else {
            count += reminder[60 - t % 60]
        }
        
        reminder[t % 60]++
    }
    return count;
}