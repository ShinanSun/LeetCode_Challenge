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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    //edge case;
    if (depth === 1) {
        let newRoot = new TreeNode(val, root, null);
        return newRoot;
    }
    
    //find the depth - 2;
    let targetDepth = depth - 2;
    let currDepth = 0;
    let queue = [root];
    while(queue.length) {
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            let currNode = queue.shift();
            let left = currNode.left;
            let right = currNode.right;
            
            if (currDepth < targetDepth) {
                if (left) queue.push(left);
                if (right) queue.push(right);
            }
            if (currDepth === targetDepth) {
                currNode.left = new TreeNode(val, left, null);
                currNode.right = new TreeNode(val, null, right);
            } 
            if (currDepth > targetDepth) break;
            
        }
        currDepth++;
    }
    
    return root;
};


