//what is priority queue?
//a data structure where each element has a priority. elements with higher priority served first.

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(x, y) {
    var temp = this.values[x];
    this.values[x] = this.values[y];
    this.values[y] = temp;
  }

  enqueue(val, priority) {
    var node = new Node(val, priority);
    this.values.push(node);
    var idx = this.values.length - 1;
    if (idx === 0) return;
    var parentIndex = Math.floor((idx - 1) / 2);

    while (this.values[idx].priority < this.values[parentIndex].priority) {
      this.swap(idx, parentIndex);
      idx = parentIndex;
    }
  }

  dequeue() {
    if (!this.values.length) return;
    this.swap(0, this.values.length - 1);
    let oldRoot = this.values.pop();

    //now, bubble down
    let idx = 0;
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;
    let priorityIdx =
      this.values[left].priority < this.values[right].priority ? left : right;

    while (this.values[idx].priority > this.values[priorityIdx].priority) {
      this.swap(idx, priorityIdx);
      idx = priorityIdx;
    }

    return oldRoot;
  }
}

let ER = new PriorityQueue();
ER.enqueue('cold', 5);
ER.enqueue('asthma', 3);
ER.enqueue('gun shot', 1);
ER.enqueue('surgery', 2);

console.log(ER);

console.log('waht is first', ER.dequeue());
console.log('ER now', ER);
