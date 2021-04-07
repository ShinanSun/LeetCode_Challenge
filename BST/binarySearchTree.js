class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root;
  }

  insert(value) {
    // helper function for recursive calles
    function helper(node) {
      if (node.value > newNode.value) {
        if (node.left === null) {
          node.left = newNode;
          return;
        } else {
          helper(node.left);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
          return;
        } else {
          helper(node.right);
        }
      }
    }
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      return helper(this.root);
    }
  }

  find(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      return false;
    } else {
      return helper(this.root);
    }
    function helper(node) {
      if (node.value === newNode.value) {
        return true;
      }
      if (node.value > newNode.value) {
        if (node.left !== null) {
          return helper(node.left);
        } else {
          return false;
        }
      }
      if (node.value < newNode.value) {
        if (node.right !== null) {
          return helper(node.right);
        } else {
          return false;
        }
      }
    }
  }

  BFS() {
    //Breadth first search, visited very node.
    var queue = [this.root];
    var visited = [];
    var node;
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  DFS() {
    // Depth first search pre-order visit every node.
    var visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return visited;
  }

  DFSpostOrder() {
    // DFS post order, visited children first before parent, such that this.root is the last one you visited;
    var visited = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }
}

var tree = new BST();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.insert(8);
tree.insert(16);
tree.insert(3);
