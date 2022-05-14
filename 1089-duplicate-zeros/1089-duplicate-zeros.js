/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let queue = []; //all the non-zeros
    let zeroIndex = new Set();
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            queue.push(arr[i])
        } else {
            zeroIndex.add(i + count);
            zeroIndex.add(i + 1 + count);
            count++;
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (zeroIndex.has(i)) {
            arr[i] = 0
        } else {
            arr[i] = queue.shift();
        }
    }
};