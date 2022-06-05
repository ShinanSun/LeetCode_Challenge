/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 
 [1,3,6] k = 3
 */
var smallestRangeII = function(nums, k) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = nums[n - 1] - nums[0];
    
    
    for(let i = 0; i < n -1; i++) {
        let a = nums[i];
        let b = nums[i + 1];
        let high = Math.max(a + k, nums[n - 1] - k)
        let low = Math.min(b - k, nums[0] + k)
        ans = Math.min(ans, high - low)
    }
    
    return ans
};