/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.queue = nums;
    this.isUnique = {};
    for (let num of nums) {
        if (this.isUnique[num] === undefined) {
            this.isUnique[num] = true;
        } else {
            this.isUnique[num] = false;
        }
    }
   // console.log(this.isUnique)
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    for (let num of this.queue) {
        if (this.isUnique[num]) return num;
    }
    
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    this.queue.push(value)
    if (this.isUnique[value] === true) {
        this.isUnique[value] = false;
    } 
    if (this.isUnique[value] === undefined) {
        this.isUnique[value] = true;
    } 
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */