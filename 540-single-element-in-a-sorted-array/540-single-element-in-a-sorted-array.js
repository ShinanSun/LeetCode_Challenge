/**
 * @param {number[]} nums
 * @return {number}
 */

const isEven = function (start, end) {
    return (end - start + 1) % 2 === 0
}
var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === nums[mid + 1]) {
            if (isEven(mid + 2, right)) {
                right = mid - 1;
            } else {
                left = mid + 2;
            }
        } else if (nums[mid] === nums[mid - 1]) {
            if (isEven(left, mid - 2)) {
                left = mid + 1;
            } else {
                right = mid - 2;
            }
        } else {
            return nums[mid];
        }
    }
     
    return nums[left];
};