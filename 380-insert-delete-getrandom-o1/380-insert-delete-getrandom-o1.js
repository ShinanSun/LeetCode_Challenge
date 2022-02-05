
var RandomizedSet = function() {
    this.list = [];
    this.map = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] !== undefined) return false;
    
    this.map[val] = this.list.length;
    this.list.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] === undefined) return false;
    
    let x = this.map[val]; 
    let y = this.list.length - 1;
    
    //switch x, y position;
    let temp = this.list[y]; //temp is the last element value;
    this.map[temp] = x;
    this.list[y] = this.list[x];
    this.list[x] = temp;
    
    //pop off the last element and update in map.
    this.list.pop();
    delete this.map[val];
   
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    if (!this.list.length)  return false;
    
    let length = this.list.length;
    let random = Math.floor(Math.random() * length);
    return this.list[random];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */