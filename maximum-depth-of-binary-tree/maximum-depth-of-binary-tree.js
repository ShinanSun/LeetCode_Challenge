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
 * @return {number}
 */
var maxDepth = function(root) {
   if (!root){
       return 0;
   }
    
    var leftHeight = maxDepth(root.left);
    var rightHeight = maxDepth(root.right);
    
    return 1 + Math.max(leftHeight, rightHeight);
};