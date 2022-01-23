/**
 * @param {number[]} w
 w = [1, 2, 4];
 prefixSum = [1, 3, 7]; target = 3
 index 0 : < 1
 index 1:   < 3
 index 2: < 7;
 // using binarysearch to find the first element that bigger than target;
 
 [0, 1, 1, 3,3,3,3]
 */
var Solution = function(w) {
    let length = w.length;
    this.prefixSums = [w[0]];
    for (let i = 1; i < length; i++) {
        this.prefixSums[i] = w[i] + this.prefixSums[i - 1];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let length = this.prefixSums.length;
    let target = Math.floor(Math.random() * this.prefixSums[length - 1]);
    
    let left = 0, right = length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target >= this.prefixSums[mid]) {
            left = mid + 1;
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