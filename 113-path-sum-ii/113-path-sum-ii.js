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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    
    const dfs = function (node, sum, path) {
        if (!node) return;

        path.push(node.val);
        //console.log(path)
        if (sum === node.val && !node.left && !node.right) {
            //find leave here;
            result.push(path.slice())
        } else {
            dfs(node.left, sum - node.val, path);
            dfs(node.right, sum - node.val, path);
        }
        
        path.pop(node.val)
    }
    
    dfs(root, targetSum, [])
    
    return result;
};

