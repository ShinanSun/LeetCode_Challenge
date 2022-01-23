
var TimeMap = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (this.map.has(key)) {
        this.map.get(key).push([value, timestamp])
    } else {
        this.map.set(key, [[value, timestamp]])
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 [1, 4, 14, 16] target = 15;
 find the first element that is smaller or equal than target;
 
 
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return '';
    
    let sortedArr = this.map.get(key);  //[ [ 'bar', 1 ], [ 'bar2', 4 ], ['bababa', 5], ['bababa', 9]]  target is 6
    // console.log(sortedArr, timestamp)
    let left = 0, right = sortedArr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (sortedArr[mid][1] === timestamp) return sortedArr[mid][0];
        
        if (sortedArr[mid][1] > timestamp) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    //console.log(left, right, '-----')
    if (right < 0) return ''
    return sortedArr[right][0];
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

