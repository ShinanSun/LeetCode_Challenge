/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {
    let res = [];
    dfs(root, res);
    return res;
};


const dfs = function(node, res) {
    if (!node) return -1;
    
    let left = dfs(node.left, res);
    let right = dfs(node.right,res);
    let level =  Math.max(left, right) + 1;
    if (res[level] === undefined) {
        res[level] = []
    }
    res[level].push(node.val);
    return level;
}