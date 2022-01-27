/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const skipCurrent = function(nums, start, mid) {
    return nums[start] === nums[mid];
}
const existsInFirst = function(startVal, target) {
    return startVal <= target
}

var search = function(nums, target) {
    if (!nums.length) return false;
    
    let start = 0, end = nums.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) return true;
        if (skipCurrent(nums, start, mid)) {
            start++;
            continue;
        }
        
        //which array pivot belong to;
        let povitInFirst = existsInFirst(nums[start], nums[mid]);
        let targetInFirst = existsInFirst(nums[start], target);
        
        if (povitInFirst && targetInFirst || !povitInFirst && !targetInFirst) {
            if (nums[mid] < target) start = mid + 1;
            else end = mid - 1;
        } else {
            if (povitInFirst) start = mid + 1;
            else end = mid - 1;
        }
    }
    
    return false;
};