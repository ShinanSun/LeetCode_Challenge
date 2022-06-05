/**
 * @param {number} capacity
 */
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublelyLinkedList {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    
    //adding to the head side;
    add(node) {
        let next = this.head.next;
        this.head.next = node;
        next.prev = node;
        
        node.prev = this.head;
        node.next = next;
        this.size++;
    }
    
    remove(node) {
        let prev = node.prev;
        let next = node.next;
        
        prev.next = next;
        next.prev = prev;
        this.size--;
    }
}


var LRUCache = function(capacity) {
    this.map = {};
    this.dll = new DoublelyLinkedList();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // if there is key in the map? 
    let node = this.map[key];
    //remove from the dll
    if (!node) return -1;
    // remove and add to the head
    this.dll.remove(node);
    this.dll.add(node);
    
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map[key];
    if (node) {
        this.dll.remove(node);
    }
    
    node = new Node(key, value);
    this.map[key] = node;
    this.dll.add(node);
    
    if (this.dll.size > this.capacity) {
        let removeTail = this.dll.tail.prev;
        this.dll.remove(removeTail);
        delete this.map[removeTail.key];
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */