/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 the build in sorting algorithm => array.sort() time complexity is O(xlogx),
 so, if we are using the build in sorting method, time complexity is (m+n)Log(m+n)
 */
var merge = function(nums1, m, nums2, n) {
    var i = m + n -1;
    while (m> 0 && n > 0) {
        if (nums1[m-1] > nums2[n-1]) {
            nums1[i] = nums1[m-1];
            m--
        } else {
            nums1[i] = nums2[n-1];
            n--
        }
        i--
    }
    while (n > 0) {
        nums1[i] = nums2[n-1];
        n--
        i--
    }
    
    return nums1
};