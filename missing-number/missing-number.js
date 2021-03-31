/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var memo = {};
    
    for (var i = 0; i < nums.length; i++){
        memo[nums[i]] = i;
    }
    for (var i = 0; i <= nums.length; i++) {
        if (memo[i] === undefined) {
            return i;
        }
    }
};