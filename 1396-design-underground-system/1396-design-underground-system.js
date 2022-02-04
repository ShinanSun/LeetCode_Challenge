
var UndergroundSystem = function() {
    this.travel = {};
    this.average = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.travel[id] = [stationName, t];  // this is garenteee id can only check in one place at the time;
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let fromAToB = this.travel[id][0] + '_' + stationName;
    let timeDifference = t - this.travel[id][1];
    
    if (!this.average[fromAToB]) {
        this.average[fromAToB] = [timeDifference, 1];
    } else {
       let [time, n] = this.average[fromAToB];
        this.average[fromAToB][0] = time + timeDifference;
        this.average[fromAToB][1] = n + 1;
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let fromAToB = startStation + '_' + endStation;
    if (!this.average[fromAToB]) return null;
    
    return this.average[fromAToB][0] / this.average[fromAToB][1];
    
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */