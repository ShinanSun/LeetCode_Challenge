/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ret = [];
    
    let visited = new Array(nums.length).fill(false);
    dfs(0, [], visited, nums, ret);
    return ret;
};

const dfs = function(depth, path, visited, nums, ret) {
    
    if (depth === nums.length) {
        ret.push(path.slice());
        return;
    }
    
    
    for (let i = 0; i < nums.length; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        path.push(nums[i]);
       
        dfs(depth + 1, path, visited, nums, ret);
        visited[i] = false;
        path.pop()
    }
}