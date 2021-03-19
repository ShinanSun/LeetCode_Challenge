/* programming puzzle for AoPS
input: frist argument: a binary tree structure each node has a value, left and right property. second argument: target value.
output: a string 
constraint: none
edge case: 
    -if the pyramid is smaller than two rows, return 'no valid path, please provide a vaild pyramid';
    -can't find a path lead to target value. return 'no valid path, please change a valid target value'.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// build a pyramid.
function pyramidConstructor(nestedArr) {
  const nodes = [];
  for (let i = nestedArr.length - 1; i >= 0; i--) {
    nodes[i] = [];
    let array = nestedArr[i];
    for (let j = 0; j < array.length; j++) {
      const node = new Node(array[j]);
      nodes[i][j] = node;
      if (i < nestedArr.length - 1) {
        node.left = nodes[i + 1][j];
        node.right = nodes[i + 1][j + 1];
      }
    }
  }

  return nodes[0][0];
}

//solution for the puzzle using DFS and backtracking.
function puzzleSolver(pyramid, target) {
  var path = [];
  var found = false;
  if (!pyramid || !pyramid.left) {
    return 'no valid path, please provide a vaild pyramid';
  }
  //helper function DFS.
  function DFS(pyramid, target, position) {
    if (found) {
      return;
    }

    path.push(position);

    if (pyramid.left === null) {
      if (target / pyramid.value === 1) {
        found = true;
      } else {
        path.pop();
      }
      return;
    }

    DFS(pyramid.left, target / pyramid.value, 'L');
    DFS(pyramid.right, target / pyramid.value, 'R');

    if (!found) {
      path.pop();
    }
  }

  DFS(pyramid.left, target / pyramid.value, 'L');
  DFS(pyramid.right, target / pyramid.value, 'R');

  if (!path.length) {
    return 'no valid path, please change a valid target value';
  }
  return path.join('');
}

//testing the solution.
var pyramid = pyramidConstructor([
  [2],
  [4, 3],
  [3, 2, 6],
  [2, 9, 5, 2],
  [10, 5, 2, 15, 5],
]);
var result = puzzleSolver(pyramid, 720);
console.log('result is ', result); // log: result is LRLL

module.exports = { puzzleSolver, pyramidConstructor };
