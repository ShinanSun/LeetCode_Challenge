/*
input: strings, column
output: concised strings
restraints: line
edge case: 
example: "aa", 1
*/

// if the string only has one space between words

function wrapper(string, column) {
  if (!string) {
    return '';
  }

  const words = string.split(' ');
  var prev = words[0],
    counter = 0,
    memo = [];

  for (var i = 1; i < words.length; i++) {
    counter = prev.length + words[i].length + 1;
    if (counter > column) {
      memo.push(prev);
      prev = words[i];
    } else {
      prev += ' ' + words[i];
    }
  }
  memo.push(prev);
  return memo.join('\n');
}

console.log(
  wrapper('you are a ccc pret good thank you so much for the are you cool', 10)
);
