/**
 * @param {number[]} arr
 * @return {number}
 [3,1,2,4]
      
 
 */
var sumSubarrayMins = function(arr) {
    let n = arr.length;
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    
    //findleft;
    let stk = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stk.length > 0 && arr[stk[stk.length - 1]] >= arr[i]) {
            left[stk.pop()] = i;
        }
            
        stk.push(i);
    }
    
    stk = [];
    //find right;
    for (let i = 0; i < n; i++) {
        while (stk.length > 0 && arr[stk[stk.length - 1]] > arr[i]) {
            right[stk.pop()] = i;
        }
        stk.push(i);
    }
    
  //  console.log(left, right)
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += arr[i] * (i - left[i]) * (right[i] - i);
    }
    return res % (10 ** 9 + 7);
};