/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let curr = Math.abs(nums[i]);
        if (nums[curr] < 0) {
            return curr;
        }
        nums[curr] *= -1;
    }
};