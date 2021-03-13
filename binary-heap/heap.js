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


*/
class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    var idx = this.values.length - 1;
    var element = this.values[idx];
    let parentIndex = Math.floor((idx - 1) / 2);
    while (this.values[idx] > this.values[parentIndex]) {
      //swap;
      this.values[idx] = this.values[parentIndex];
      this.values[parentIndex] = element;
      idx = parentIndex;
      parentIndex = Math.floor((idx - 1) / 2);
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log('what is heap', heap.values);
