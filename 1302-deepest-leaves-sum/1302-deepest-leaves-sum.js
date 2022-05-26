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
var deepestLeavesSum = function(root) {
    if (!root) return 0;
    
    let currLevel = [root];
    let nextLevel = [root];
    while (nextLevel.length) {
        currLevel = nextLevel.slice();
        nextLevel = [];
        
        let size = currLevel.length;
        for (let i = 0; i < size; i++) {
            let node = currLevel[i];
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }
    }
    
    let sum = 0;
    for (let node of currLevel) {
        sum += node.val;
    }
    
    return sum;
};