//sort a group of 1280 books on a bookshelf. s
//best approve is using QuickSort.

var alphabetizeBookshelf = function (books) {
  if (books.length < 2) return books;

  // Using the first item as random partition is a common approach.
  // What if this first book begins with 'Z' or 'A'? See W4D3 toy problem.
  let pivot = books[0];
  let lowerBooks = [];
  let higherBooks = [];

  for (let i = 1; i < books.length; i++) {
    if (books[i] > pivot) {
      higherBooks.push(books[i]);
    } else {
      lowerBooks.push(books[i]);
    }
  }
  // Bring the sublines and pivot together to return the alphabetized array
  return alphabetizeBookshelf(lowerBooks).concat(
    pivot,
    alphabetizeBookshelf(higherBooks)
  );
};

console.log(
  alphabetizeBookshelf([
    'Brave New World',
    'Parable of the Sower',
    '1Q84',
    'Tehanu',
    'Hyperion',
    'Falling Free',
    'Ready Player One',
    'Neuromancer',
  ])
);
