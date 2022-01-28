/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const findPosition = function(nums, i) {
    let target = nums[i];
    let j = i;
    while (nums[i] === target && i < nums.length) {
        i++;
    }
    while (nums[j] === target && j >= 0) {
        j--;
    }
    
    return [j + 1, i - 1];
}

var searchRange = function(nums, target) {
    if (!nums.length) return [-1, -1];
    
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log(left, mid, right)
        if (target === nums[mid]) {
            return findPosition(nums, mid);
        }
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return [-1, -1];
};