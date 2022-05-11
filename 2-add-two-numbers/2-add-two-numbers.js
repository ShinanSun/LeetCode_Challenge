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
    while(l1 && l2) {
        let value = l1.val + l2.val + tenth;
        if (value >= 10) {
            temp.next = new ListNode(value - 10);
            tenth = 1;
        } else {
            temp.next = new ListNode(value);
            tenth = 0;
        }
        
        temp = temp.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    
  // console.log(l1, l2, retList.next)
   let rest = l1 || l2;
   while (rest) {
       let value = tenth + rest.val;
       if (value === 10) {
           temp.next = new ListNode(0);
           tenth = 1;
       } else {
           temp.next = new ListNode(value);
           tenth = 0;
       }
       
       temp = temp.next;
       rest = rest.next;
   }
    if (tenth > 0) {
        temp.next = new ListNode(1);
    }
    return retList.next;
};