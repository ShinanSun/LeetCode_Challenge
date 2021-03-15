/* what is hash table? hash tables are used to store key-value pairs. hash tables are fast, constant time look up/insert/remove.
in Javascript, the build-in hashtables you can use Map
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
    //default size of 53, 53 is a prime number.
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

  keys() {
    let keyArr = [];
    for (let box of this.keyMap) {
      if (box) {
        for (let [key, val] of box) {
          keyArr.push(key);
        }
      }
    }

    return keyArr;
  }

  values() {
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let [key, val] of this.keyMap[i]) {
          if (!valueArr.includes(val)) {
            valueArr.push(val);
          }
        }
      }
    }
    return valueArr;
  }
}

let ht = new HashTable();
ht.set('hello world', 'baby');
ht.set('mom', 'love');
ht.set('red', 'great');
console.log(ht);
let result = ht.get('hello world');
console.log(ht.keys());
console.log(ht.values());
