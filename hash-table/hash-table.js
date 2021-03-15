/* what is hash table? hash tables are used to store key-value pairs. hash tables are fast, constant time look up/insert/remove.

*/

//easy version of a hash table that only convert strings;
function hash(string, arrayLength) {
  let total = 0;
  for (let char of string) {
    total += char.charCodeAt(0) - 96;
  }
  return total % arrayLength;
}

//A hash table Class
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;
    for (let char of key) {
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    var idx = this._hash(key);
    if (this.keyMap[idx]) {
      this.keyMap[idx].push([key, value]);
    } else {
      this.keyMap[idx] = [[key, value]];
    }
  }

  get(key) {
    var idx = this._hash(key);
    if (this.keyMap[idx]) {
      for (let [KAY, VAL] of this.keyMap[idx]) {
        if (KAY === key) {
          return VAL;
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable();
ht.set('hello world', 'baby');
console.log(ht);
let result = ht.get('hello world');
console.log(result);
