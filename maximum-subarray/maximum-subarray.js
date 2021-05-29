/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    var hasPositive = false;
    for (let num of nums){
        if (num > 0) {
            hasPositive = true;
        }
    }
   
    var result = -Infinity;
    for (var i = 0; i < nums.length; i++){
        var curr = nums[i];
        result = Math.max(curr, result)
        for (var j = i + 1; j < nums.length; j++){
            if (curr < 0 && hasPositive){
                curr = 0
            }
            curr += nums[j];
            
            result = Math.max(curr, result)
        }
    }
    return result;
};