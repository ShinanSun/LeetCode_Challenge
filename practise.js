function checkMagazine(magazine, note) {
  magazine = magazine.split(' ');
  note = note.split(' ');
  var memo = {};
  for (let word of magazine) {
    if (!memo[word]) {
      memo[word] = 1;
    } else {
      memo[word]++;
    }
  }
  console.log('what is memo', memo);
  for (let char of note) {
    if (memo[char] > 0) {
      memo[char]--;
    } else {
      return 'No';
    }
  }
  return 'Yes';
}

var result = checkMagazine(
  'given me one grand today night',
  'give one grand today'
);
console.log(`result`, result);

// ----------------------------
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.visit = [];
  this.length = 0;
};

LRUCache.prototype.get = function (key) {
  var index = this.visit.indexOf(key);
  if (index >= 0) {
    this.visit.splice(index, 1);
  }
  this.visit.push(key);
  if (this[key]) {
    return this[key];
  } else {
    return -1;
  }
};

LRUCache.prototype.put = function (key, value) {
  var index = this.visit.indexOf(key);
  if (index > 0) {
    this.visit.splice(index, 1);
  }
  this.visit.push(key);

  this[key] = value;
  this.length++;
  if (this.length === this.capacity) {
    var LRU = this.visit.shift();
    delete this[LRU];
  }
};
