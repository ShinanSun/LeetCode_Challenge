/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x;
    let left = 2, right = Math.floor(x/2);
    let mid = Math.floor((left + right)/2);
    
    while (left<= right){
        if (mid*mid === x) {
            return mid
        }
        if (mid*mid > x) {
            right = mid -1;
        }
        if (mid*mid < x) {
            left = mid + 1
        }
        mid = Math.floor((left + right)/2);
    }
    
    return right;
};