/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let numberToFind = target - nums[i];
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i]
        } 
        map.set(numberToFind, i)
    }
};