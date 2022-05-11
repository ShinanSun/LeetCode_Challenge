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
    let retList = new ListNode();
    let temp = retList;
    let tenth = 0;
    while(l1 || l2) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let value = x + y + tenth;
        if (value >= 10) {
            temp.next = new ListNode(value - 10);
            tenth = 1;
        } else {
            temp.next = new ListNode(value);
            tenth = 0;
        }
        
        temp = temp.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    

    if (tenth > 0) {
        temp.next = new ListNode(1);
    }
    return retList.next;
};