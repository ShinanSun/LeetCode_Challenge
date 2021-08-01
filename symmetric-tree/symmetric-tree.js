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

var isSymmetric = function (root) {
  return mirror(root, root);

  function mirror(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;

    return (
      node1.val === node2.val &&
      mirror(node1.right, node2.left) &&
      mirror(node1.left, node2.right)
    );
  }
};

//option 2 using queue.
var isSymmetric = function (root) {
  if (!root) return true;
  let array = [root.left, root.right];

  while (array.length) {
    let node1 = array.shift();
    let node2 = array.shift();

    if (!node1 && !node2) continue;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;
    array.push(node1.left);
    array.push(node2.right);
    array.push(node1.right);
    array.push(node2.left);
  }

  return true;
};
