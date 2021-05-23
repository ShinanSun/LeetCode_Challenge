/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var left = 0, right = nums.length-1;
    var mid = Math.floor((right + left)/2)
   
    
    while(left <= right) {
        if (nums[mid] === target){
            return mid;
        }
        if (target > nums[mid]){
            left = mid + 1;
            mid = Math.floor((right + left)/2)
        }
        if (target < nums[mid]){
            right = mid -1;
            mid = Math.floor((right + left)/2)
        }
    }
    
    return left;
};