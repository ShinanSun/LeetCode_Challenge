/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    if (arr.length < 2) return [];
    
    arr.sort((a, b) => a - b);
    let diff = {}
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i] - arr[i - 1];
        diff[key] !== undefined ? diff[key].push([arr[i - 1], arr[i]]) :  diff[key] = [[arr[i - 1], arr[i]]];
    }
  //  console.log(diff)
    
    let min = Infinity;
    for (let key in diff) {
        if (parseInt(key) < min) min = parseInt(key);
        
    }
    
    return diff[min];
};