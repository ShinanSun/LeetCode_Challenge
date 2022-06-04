
var MedianFinder = function() {
    this.list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.list.length < 4) {
        this.list.push(num)
        this.list.sort((a, b) => a - b);
    } else {
        if (num <= this.list[0]) {
            this.list.unshift(num)
        } else if (num >= this.list[this.list.length - 1]) {
            this.list.push(num)
        } else {
            let left = 0, right = this.list.length - 1;
            while(left <= right) {
                let mid = Math.floor((left + right) /2);
                if (num > this.list[mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            
            let rightSide = [num].concat(this.list.slice(left))
            this.list = this.list.slice(0, left).concat(rightSide)
        }
         
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    //console.log(this.list)
    let n = this.list.length;
    if (n === 0) return;
    let mid = Math.floor(n / 2);
   // console.log(mid)
    if (n % 2 === 1) return this.list[mid]
    return (this.list[mid] + this.list[mid - 1]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */