/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 [8,4,5,0,0,0,0,7] length = 8
          ^ 
 count=
 */
var duplicateZeros = function(arr) {
    let count = 0;
    let right = 0;
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count += 2;
        } else {
            count++;
        }
        
        if (count >= arr.length) {
            right = i;
            flag = (arr.length + 1 === count)
            break;
        }
    }
    
    let start = arr.length - 1;
    if (flag) {
       arr[arr.length - 1] = 0;
       right--;
       start--;
    }
    for (let j = start; j >= 0; j--) {
        if (arr[right] !== 0) {
            arr[j] = arr[right]
            right--;
        } else {
            arr[j] = 0;
            arr[--j] = 0;
            right--;
        }
    }
};