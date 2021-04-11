/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return null;
    var stack = [];
    stack.push(head);
    var tempHead = new Node (0, null, head, null)
    var prev = tempHead;
    
    while (stack.length) {
        var curr = stack.pop();
        curr.prev = prev;
        prev.next = curr;
        
        if (curr.next) {
            stack.push(curr.next)
        }
        
        if (curr.child) {
            stack.push(curr.child);
            curr.child = null
        }
        
        prev = curr;
    }
    
    //now we detach the tempHead
    tempHead.next.prev = null
    return tempHead.next;
};