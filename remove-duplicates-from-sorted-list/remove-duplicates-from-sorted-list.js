/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var tempHead = head;
    if (!head) return null;
    while (head && head.next) {
        var curr = head.val;
        var next = head.next.val;
        if (curr === next) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
        
    }
    return tempHead;
};