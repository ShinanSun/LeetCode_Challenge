/**
 * @param {number[]} nums is possible rotated;
 * @param {number} target
 * @return {number} return the index of target or -1; 
 */
var search = function(nums, target) {
    //edge case
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    
    let rotatedIndex = findRotatedIndex(0, nums.length - 1, nums);
    //console.log(rotatedIndex)
    if (nums[rotatedIndex] === target) return rotatedIndex;
    if (rotatedIndex === 0) return binarySearch(0, nums.length - 1, nums, target);

    if (nums[0] <= target) {
        return binarySearch(0, rotatedIndex - 1, nums, target);
    } else {
        return binarySearch(rotatedIndex, nums.length - 1, nums, target);
    }
};
// example [4,5,6,7,0,1,2] notice that the index of small element in the array is our rotated index;
const findRotatedIndex = function (left, right, nums) {
    //edge case if there is no rotation happening
    if (nums[left] < nums[right]) return 0;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return mid + 1;
        } else {
            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return 0;
}


const binarySearch = function (left, right, nums, target) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;
}