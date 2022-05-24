/**
 * @param {number[]} w
 
 w = [1, 3, 2]
 => [0,1,1,1,2,2] index 0 - 5, 
 
preSum = [1, 4, 6]  find first greater element index. 
[0, 1) 0
[1, 4) 1
[4, 6) 2

random = 5
left = 2, right = 1
mid = 2

 
 */
var Solution = function(w) {
    this.preSum = [w[0]];
    for (let i = 1; i < w.length; i++) {
        this.preSum[i] = this.preSum[i - 1] + w[i];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
   // console.log(this.preSum)
    let n = this.preSum[this.preSum.length - 1];
    let random = Math.floor(Math.random() * n);
    
    let left = 0, right = this.preSum.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (random >= this.preSum[mid]) {
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }
    
    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */