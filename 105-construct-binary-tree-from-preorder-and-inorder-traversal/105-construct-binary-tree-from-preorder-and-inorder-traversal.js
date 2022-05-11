/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const dfs = function(arr) {
      
        if (arr.length === 0) return null;
        let value = preorder.shift();
       // console.log(value)
        let root = new TreeNode(value);

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                root.left = dfs(arr.slice(0, i));
                root.right = dfs(arr.slice(i + 1));
            }
        }
        
        return root;
    }
    
    
    return dfs(inorder);
};



