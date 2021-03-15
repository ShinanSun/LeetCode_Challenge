/* note: what is a binary heap? It's a type of tree as well, it's very similar to BST, but with different rules.
MaxBinaryHeap: parent node are always larger than children.
MinBinaryHeap: parent nodes are always smaller than children. 
rules: 
-no implied orders between siblings. there is no relationship between sibliings other than they both larger than their direct parent.
-always adding the left child first then insert the right child.
commomly used for:
    -Priority Queues
    -Graph Traversal
--------------------------------------------------------
implementing Binary Heap using Array
-MaxBinaryHeap: for any parent at index of an array n, the leftchild is stored at 2n + 1; rightchild 2n + 2;
-MinBinaryHeap: for any child at index of n,  its parent is at index Math.floor( (n-1)/2 ) 
--------------------------------------------------------
Big O of binary Heap:
-insertion: log n
-extraction: log n
-search: liner
*/
class MaxBinaryHeap {
  constructor() {
    this.values = [60, 12, 24];
  }

  insert(val) {
    this.values.push(val);
    var idx = this.values.length - 1;
    let parentIndex = Math.floor((idx - 1) / 2);

    while (this.values[idx] > this.values[parentIndex]) {
      //swap;
      this.swap(idx, parentIndex);
      idx = parentIndex;
    }
  }

  swap(x, y) {
    var temp = this.values[x];
    this.values[x] = this.values[y];
    this.values[y] = temp;
  }

  extractMax() {
    if (!this.values.length) return;
    this.swap(0, this.values.length - 1);
    let oldRoot = this.values.pop();

    let index = 0;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let greaterIdx = this.values[left] > this.values[right] ? left : right;

    while (this.values[index] < this.values[greaterIdx]) {
      this.swap(index, greaterIdx);
      index = greaterIdx;
    }

    return oldRoot;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
//heap.insert(85);
console.log('what is heap', heap.values);
console.log('root', heap.extractMax());
heap.extractMax();
console.log('now heap', heap.values);
