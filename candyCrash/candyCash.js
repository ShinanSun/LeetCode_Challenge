// Using recusive calls
function candyCrash(board) {
  let i = 0,
    j = 1,
    found = false;

  var length = board.length;

  while (j < length) {
    if (board[i] !== board[j]) {
      i++;
      j++;
    } else {
      j++;
      while (board[i] === board[j]) {
        j++;
      }
      if (j - i > 2) {
        found = true;
        break;
      }
      i = j;
      j++;
    }
  }

  if (!found) {
    return board;
  }
  newBoard = board.slice(0, i).concat(board.slice(j));
  return candyCrash(newBoard);
}

var result = candyCrash([1, 12, 12, 3, 3, 3, 12, 12, 5, 5, 5, 13]); // [1, 5, 13]
console.log('result', result);

//Optimization
function candyCrash2(string) {
  var i = 0,
    j = 1;

  while (j < string.length) {
    if (string[i] !== string[j]) {
      i++;
      j++;
    } else {
      while (string[i] === string[j]) {
        j++;
      }

      if (j - i > 2) {
        string = string.slice(0, i) + string.slice(j);
        console.log('waht is string', string);
        while (string[i] === string[i - 1]) {
          i--;
        }
        j = i + 1;
      } else {
        i = j;
        j = i + 1;
      }
    }
  }

  return string;
}

// var dd = candyCrash2('ABBCCCBAAABBC');
// console.log('dd', dd);
