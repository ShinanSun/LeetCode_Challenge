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
var countNodes = function(root) {
    if (!root) return 0;
    
    const level = findLevel(root);
    if (!level) return 1;
   
    const upperLevelCount = Math.pow(2, level) - 1; 
    
    //find number of nodes in last level;
    //note that if last level is full, NumberOfNodesInLastLevel= Math.pow(2, level -1);
    let left = 0, right = Math.pow(2, level) - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (exist(mid, level, root)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left + upperLevelCount;
};

// Last level nodes are enumerated from 0 to 2**d - 1 (left -> right).
// Return True if last level node idx exists. 
const exist = function(idx, level, root) {
    let left = 0, right = Math.pow(2, level) - 1;
    let pivot;
    for (let i = 0; i < level; i++) {
        pivot = Math.floor((left + right) / 2);
        if (idx <= pivot) {
            root = root.left;
            right = pivot - 1;
        } else {
            root = root.right;
            left = pivot + 1;
        }
    }
    
    return root !== null;
}

const findLevel = function(node) {
    let level = 0;
    while (node.left) {
        node = node.left;
        level++;
    }
    
    return level;
}