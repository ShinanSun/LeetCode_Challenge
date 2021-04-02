class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//building a class linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //remove the tail
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current; //now newTail is the prev second last one;
      current = current.next; // now current is the prev tail, will be return at the end;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  //remove the head
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    var currentHead = this.head;
    this.head = node;
    node.next = currentHead;
    this.length++;
    return this;
  }

  //given a index, return the corresponding node;
  get(index) {
    if (index < 0 || index > this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  //given a index and val, insert a new node there.
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);

    var node = new Node(val);
    var prev = this.get(index - 1);
    var current = prev.next;
    prev.next = node;
    node.next = current;
    this.length++;
    return this;
  }

  //remove the node at given index;
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.pop();
    if (index === 0) return this.unshift();

    var prev = this.get(index - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;

    return removed;
  }
}

var list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
