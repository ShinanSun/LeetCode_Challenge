/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.root = buildSegmentTree(0, nums.length - 1, nums);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    
    const updateTree = function(node, index, val) {
        if (!node) return;
        if (node.start === index && node.end === index) {
            node.sum = val;
            return;
        }
        
        let mid = Math.floor((node.start + node.end) / 2);
        if (index <= mid) {
            updateTree(node.left, index, val);
        } else {
            updateTree(node.right, index, val);
        }
     //   console.log('what is node', node)
        node.sum = node.left.sum + node.right.sum;
    }
    
    
    updateTree(this.root, index, val);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    const findSum = function(node, left, right) {
        if (node.start === left && node.end === right) return node.sum;
        
        let mid = Math.floor((node.start + node.end) / 2);
       
        if (right <= mid) {
            return findSum(node.left, left, right);
        } else if (left > mid) {
            return findSum(node.right, left, right);
        } else {
            return findSum(node.left, left, mid) + findSum(node.right, mid + 1, right);
        }
       
    }
    
    return findSum(this.root, left, right)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */

class SegmentTreeNode {
    constructor(start, end, sum, left=null, right=null) {
        this.start = start;
        this.end = end;
        this.sum = sum;
        this.left = left;
        this.right = right;
    }
}

const buildSegmentTree = function(start, end, arr) {
    if (start === end) return new SegmentTreeNode(start, end, arr[start]);
    
    let mid = Math.floor((start + end) / 2);
    let left = buildSegmentTree(start, mid, arr);
    let right = buildSegmentTree(mid+1, end, arr);
    
    return new SegmentTreeNode(start, end, left.sum + right.sum, left, right);
}