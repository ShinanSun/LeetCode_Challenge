/**
 * @param {number[]} nums
 * @return {number}
[-1,-2,0]
 this solution will be using Negative Marking reduce the space to O(1);
 */
var firstMissingPositive = function(nums) {
    //the missing positive integer has to be in [1, nums.length + 1] inclusive;
    //first iteration, change useless negative number to 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) nums[i] = 0;
    }
    
    //second iteration, mark negative;
    for (let i = 0; i < nums.length; i++) {
        let val = Math.abs(nums[i]);
        if (val >= 0 && val <= nums.length) {
            let tarIndex = val - 1;
            if (nums[tarIndex] > 0) {
                nums[tarIndex] *= -1;
            } else if (nums[tarIndex] === 0) {
                nums[tarIndex] = (nums.length + 1) * -1;
            }
        }
    }
    //console.log(nums)
    //third iteration, find n in range [1, nums.length];
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] >= 0) {
            return i;
        }
    }
    
    return nums.length + 1;
};