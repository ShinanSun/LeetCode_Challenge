/**
 * @param {number[]} w
 */[0, 1, 1, 1]

var Solution = function(w) {
   this.nums = [w[0]];  //[1,2,3,4,3]
    for (let i = 1; i < w.length; i++) {
        this.nums[i] = w[i] + this.nums[i - 1];
    }
   
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let length = this.nums.length;
    let random = Math.floor(Math.random() * this.nums[length - 1]);  //5
    
    let left = 0, right = length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (random < this.nums[mid]) { //   3 > 5
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */