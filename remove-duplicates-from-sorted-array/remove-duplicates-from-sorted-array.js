/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[i] === nums[j]){
            continue;
        } else {
            nums[i+1] = nums[j]
            i++;
        }
    }
    return i+1
};