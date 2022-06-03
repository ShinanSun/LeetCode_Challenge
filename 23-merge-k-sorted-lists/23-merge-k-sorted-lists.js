/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    
    // let root = new ListNode();
    // let temp = root;
    let l1 = lists[0];
    for (let i = 1; i < lists.length; i++) {
        let l2 = lists[i];
        l1 = mergeTwoLists(l2, l1);
    }
    
    return l1;
};


var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let temp = head;
    while(list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
        //console.log(head)
    }
    
    if (list1) temp.next = list1;
    if (list2) temp.next = list2;
    return head.next;
};