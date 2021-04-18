/**
 * @param {number[][]} costs
 * @return {number}
 
 greedy algorithmn : pick the locally optimal solution at each step, that will lead to globally optimal.
 usually is like 'find minimum or find the largest/max number .....'
 
 */
var twoCitySchedCost = function(costs) {
    var sum = 0;
    costs = costs.sort((a, b) => {
        return (a[0] - a[1]) - (b[0] - b[1])
    })
    var n = costs.length /2
  
    for (var i = 0; i < n; i++) {
        sum += costs[i][0]
        //console.log('hello', sum)
    }
   
    for (var j = n; j < costs.length; j++) {
      
        sum += costs[j][1]
    }
    return sum;

};