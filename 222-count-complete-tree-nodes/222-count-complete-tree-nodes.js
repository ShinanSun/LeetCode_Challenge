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
const findDepth = function(root) {
    let d = 0;
    while (root.left) {
        root = root.left;
        d++;
    }
    return d;
}

const exist = function(idx, depth, length, root) {
    let left = 0, right = length - 1;
    for (let i = 0; i < depth; i++) {
        let midNode = Math.floor((left + right) / 2);
        if (idx <= midNode) {
            root = root.left;
            right = midNode - 1;
        } else {
            root = root.right;
            left = midNode + 1;
        }
    }
    
    return root !== null;
}
var countNodes = function(root) {
    if (!root) return 0;
    const d = findDepth(root);
    if (d === 0) return 1; //when we only have one node, d is 0 indexed;
    
    const upperCount = Math.pow(2, d) - 1;
    
    const lastLevelLength = Math.pow(2, d);
    let left = 0, right = lastLevelLength - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (exist(mid, d, lastLevelLength, root)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return upperCount + left;
};