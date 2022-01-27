/**
 * @param {number[]} nums
 [4,5,1,2,3]
 l = 0, r = 4, mid = 2
 l = 0  r = 1, mid = 0;
 l = 1, r = 1;  mid = 1;
 
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    //edge cases checking if there is no rotation
    if (nums[nums.length - 1] > nums[0]) return nums[0];
    
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            //here we find the smallest is mid + 1;
            return nums[mid + 1];
        }  else {
            //now compare first element and mid
            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
};