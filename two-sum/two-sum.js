/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var memo = {};
    for (var i = 0; i < nums.length; i++) {
        if (memo[target - nums[i]] !== undefined) {
            return [memo[target - nums[i]], i]
        }
        if (!memo[nums[i]]) {
            memo[nums[i]] = i
        } 
        
    }
    
};