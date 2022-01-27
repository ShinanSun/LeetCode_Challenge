/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //edge case if any array length is 0;
    
    let totalLength = nums1.length + nums2.length;
    let half = Math.floor(totalLength / 2);
    let A, B;
    if (nums1.length < nums2.length) {
        A = nums1;
        B = nums2;
    } else {
        A = nums2;
        B = nums1;
    };
   
    //A is shorter array, B is longer array;
    let left = 0, right = A.length - 1;
    while (true) {
        let Amid = Math.floor((left + right) / 2);
        let Bmid = half - Amid - 2;
        
        let AL = Amid >= 0 ? A[Amid] : -Infinity;
        let BL = Bmid >= 0 ? B[Bmid] : -Infinity;
        let AR = Amid + 1 < A.length ? A[Amid + 1] : Infinity;
        let BR = Bmid + 1 < B.length ? B[Bmid + 1] : Infinity;
        
        //if partition is correct;
        if (AL <= BR && BL <= AR) {  //left partition is always smaller than right partition;
            //if odd;
            if (totalLength % 2 !== 0) {
                return Math.min(AR, BR);
            } else {
                return (Math.max(AL, BL) + Math.min(AR, BR)) / 2;
            }
        } else if (AL > BR) { // Aleft is too big, we need to shift mid to left side for smaller value;
            right = Amid - 1;
        } else { // A right is too small, need to shift mid point to right side;
            left = Amid + 1;
        }
    }
};