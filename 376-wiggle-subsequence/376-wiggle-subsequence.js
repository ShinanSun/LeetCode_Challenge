/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) return nums.length;
    
    let preDiff = nums[1] - nums[0];
    let res = preDiff === 0 ? 1 : 2;
    
    for (let i = 2; i < nums.length; i++) {
        let currDiff = nums[i] - nums[i - 1];
        if ((preDiff <= 0 && currDiff > 0) || (preDiff >= 0 && currDiff < 0)) {
            res++;
            preDiff = currDiff
        }
    }
     
    return res;
};