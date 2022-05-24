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
    
    let minHeap = [];
    for (let list of lists) {
        if (list) minHeap.push([list.val, list]);
    }
    
    let retNode = new ListNode();
    let temp = retNode;
    while(minHeap.length) {
        minHeap.sort((a, b) => a[0] - b[0]);
        
        let [smallVal, smallNode] = minHeap.shift();
        temp.next = smallNode;
        temp = temp.next;
        
        smallNode = smallNode.next;
        if (smallNode) {
            minHeap.push([smallNode.val, smallNode]);
        }
       
    }
    
    
    return retNode.next;
};