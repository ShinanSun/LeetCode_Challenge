/**
 * @param {number[][]} board
 * @return {number[][]}
 step one: crashing 3 and more elements
 nested for loop for two-D borad i and j, assign each line(both row and col)
 helper function called flag as negative value and return the line;
 
 crashing them at the same time. 
 
 step two: drop and mark column zero
 nested forloop for i and j, each col, loop though each col, insert zero to the beginning of the col and drop the positive value;
 */
var candyCrush = function (board) {
  var status = false;
  while (status === false) {
    flagBoard(board);
    status = isStable(board);
    crash(board);
  }

  return board;
};

function flagBoard(board) {
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < row.length; j++) {
      if (row[j] === row[j + 1] && row[j] === row[j + 2]) {
        let k = j + 2;
        while (row[j] === row[k]) {
          k++;
        }
        while (j < k) {
          row[j] = -Math.abs(row[j]);
          j++;
        }
      }
    }
  }

  for (var j = 0; j < board[0].length; j++) {
    for (var i = 0; i < board.length - 2; i++) {
      var curr = Math.abs(board[i][j]);
      if (
        curr === Math.abs(board[i + 1][j]) &&
        curr === Math.abs(board[i + 2][j])
      ) {
        let k = i + 2;
        while (k < board.length && curr === Math.abs(board[k][j])) {
          k++;
        }
        while (i < k) {
          board[i][j] = -Math.abs(curr);
          i++;
        }
      }
    }
  }

  return board;
}

function crash(board) {
  for (var j = 0; j < board[0].length; j++) {
    var p = board.length - 1;
    for (var i = board.length - 1; i >= 0; i--) {
      if (board[i][j] > 0) {
        board[p][j] = board[i][j];
        p--;
      }
    }
    for (var k = p; k >= 0; k--) {
      board[k][j] = 0;
    }
  }
  return board;
}

function isStable(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] < 0) {
        return false;
      }
    }
  }

  return true;
}

var board = [
  [110, 5, 112, 113, 114],
  [210, 211, 5, 213, 214],
  [310, 311, 3, 313, 314],
  [410, 411, 412, 5, 414],
  [5, 1, 512, 3, 3],
  [610, 4, 1, 613, 614],
  [710, 1, 2, 713, 714],
  [810, 1, 2, 1, 1],
  [1, 1, 2, 2, 2],
  [4, 1, 4, 4, 1014],
];

console.log(candyCrush(board));

/* result: 
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 110, 0, 0, 0, 114 ],
  [ 210, 0, 0, 0, 214 ],
  [ 310, 0, 0, 113, 314 ],
  [ 410, 0, 0, 213, 414 ],
  [ 610, 211, 112, 313, 614 ],
  [ 710, 311, 412, 613, 714 ],
  [ 810, 411, 512, 713, 1014 ]
] 
*/
