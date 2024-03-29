/**
algorithms that binary search in peak finding;
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (left === nums.length) return right;
    return left;
};