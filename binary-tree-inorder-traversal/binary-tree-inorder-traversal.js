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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let visited = [];
   const DFS = (root) => {
       if (!root) return;
       if (root.left){
           DFS(root.left)
       }
       visited.push(root.val)
       if (root.right){
           DFS(root.right)
       }
   }
    
    DFS(root)
    
    return visited;
    
};