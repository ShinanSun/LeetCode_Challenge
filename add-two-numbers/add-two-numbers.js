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
   var value, isTwoDigit, add = 0;
    var pseudoHead = new ListNode(0);
    var prev = pseudoHead;
    while (l1 || l2) {
        var value1 = l1? l1.val : 0;
        var value2 = l2? l2.val : 0;
        console.log(value1, value2)
        if (value1 + value2 + add >= 10) {
            value = value1 + value2 + add - 10;
            isTwoDigit = true;
        } else {
            value = value1 + value2 + add;
            isTwoDigit = false;
        }
    
        var node = new ListNode (value);
        prev.next = node;
        prev = node;
        add = isTwoDigit? 1 : 0;
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
     
    if (add) {
        prev.next = new ListNode(add);
    }
 
    
    return pseudoHead.next
};