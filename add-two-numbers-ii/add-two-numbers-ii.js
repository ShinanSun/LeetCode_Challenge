/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    l1 = traverseList(l1);
    l2 = traverseList(l2);
    var carry = 0;
    var nextNode = null;
    
    while (l1.length || l2.length) {
        
        var value = carry + (l1.pop() || 0) + (l2.pop() || 0);
        carry = Math.floor(value/10);
        
        
        var curr = new ListNode(value % 10, nextNode);
        nextNode = curr;
        
    }
    
    if (carry) {
        nextNode = new ListNode(carry, nextNode)
    }
    return nextNode;
};

function traverseList (list) {
    var stack = [];
    while (list) {
        stack.push(list.val)
        list = list.next;
    }
    
    
    return stack;
}