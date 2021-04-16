
var UndergroundSystem = function() {
    this.track = {};
    this.averageTime = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.track[id] = [stationName, t];
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    var fromAToB = this.track[id][0] + "_" + stationName;
    
    var timeDifference = t - this.track[id][1];
  
    if (!this.averageTime[fromAToB]) {
        this.averageTime[fromAToB] = [timeDifference, 1]
    } else {
        var arr = this.averageTime[fromAToB];
        arr[0] = (arr[0] * arr[1] + timeDifference ) / (arr[1] + 1);
        arr[1] ++;
        
    }
    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    var fromAToB = startStation + '_' + endStation;
    return this.averageTime[fromAToB][0]
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */