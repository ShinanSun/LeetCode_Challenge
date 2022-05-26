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
    
    
    let sum = {};
    let currLevel = 0;
    let maxLevel = 0;
    
    let queue = [root];
    while(queue.length) {
        let size = queue.length;
        sum[currLevel] = 0;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum[currLevel] += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (currLevel > maxLevel) maxLevel = currLevel;
        currLevel++;
    }
    
    return sum[maxLevel];
};