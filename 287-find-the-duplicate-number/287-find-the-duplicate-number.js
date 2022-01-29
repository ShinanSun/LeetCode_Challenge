/**
 * @param {number[]} nums
 * @return {number}
 */
//当前这个数array【i】，如何记它已经走过了？ 看array [array[i]] already marked negative;

var findDuplicate = function(nums) {
    let dup = -1;
    for (let i = 0; i < nums.length; i++) {
        
        let curr = Math.abs(nums[i]);
        console.log(i, nums[i], nums[curr])
        if (nums[curr] < 0) {
            dup = curr;
            break;
        }
        nums[curr] *= -1;
    }
    
    return dup;
};

//time complexity is O(n), space O(1)