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
 * @return {boolean}
 */
var isValidBST = function(root) {
    function DFS (node, low, high) {
        if (!node) return true;
        if (node.val > low && node.val < high) {
           
                var left = DFS (node.left, low, node.val)
            
            
                var right = DFS (node.right, node.val, high)
        
            return left && right;
        } else {
            return false;
        }
    }
    
    return DFS (root, -Infinity, +Infinity)
  
};