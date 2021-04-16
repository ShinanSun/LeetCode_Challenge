/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
   if (!head) {
       return null;
   }
    var headCopy = head;
    var newHead = new Node (head.val); // 7
    var newHeadCopy = newHead;
    var map = new Map();
    map.set(head, newHead);
    
   while (head.next) {
       var node = new Node (head.next.val);

       map.set(head.next, node);
       newHead.next = node;
       newHead = node;
       head = head.next
   }

    newHead.next = null;
    
    newHead = newHeadCopy;
    head = headCopy;
    while (head) {
        if (!head.random) {
            newHead.random = null;
        } else {
            newHead.random = map.get(head.random);
        }
        head = head.next;
        newHead = newHead.next;
    }
    return newHeadCopy;
};
