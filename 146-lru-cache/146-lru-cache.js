class Node {
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }
    
    addNode(node) {
        //always add the new node right before the pseudo tail;
        node.next = this.tail;
        node.prev = this.tail.prev;
        
        this.tail.prev.next = node;
        this.tail.prev = node;
        this.size++;
    }
    
    removeNode(node) {
        let prev = node.prev;
        let next = node.next;
       
        prev.next = next;
        next.prev = prev;
        this.size--;
    }
    
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.DLL = new DLL();
    this.map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key]) {
        let node = this.map[key];
        
        this.DLL.removeNode(node);
        this.DLL.addNode(node);
        return node.val;
    }
    
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let newNode = new Node(key, value);
    
    if (this.map[key]) {
        let oldNode = this.map[key];
        this.DLL.removeNode(oldNode);  
    }
    
    this.DLL.addNode(newNode);
    this.map[key] = newNode;
    

    if (this.DLL.size > this.capacity) {
        let removeNode = this.DLL.head.next;
        this.DLL.removeNode(removeNode);
        delete this.map[removeNode.key]
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */