/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    if (target === source) return 0;
    
    let map = new Map(); //key is stop, value is array of buses pass the stop;
    for (let bus = 0; bus < routes.length; bus++) {
        for (let stop of routes[bus]){
            if (map.has(stop)) {
                map.get(stop).push(bus)
            } else {
                map.set(stop, [bus])
            }
        } 
    }
    
    //console.log(map)
    let queue = [source];
    let visited = {}, ride = {}, step = 0;
    while (queue.length) {
        step++;
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let currStop = queue.shift();
            visited[currStop] = true;
            
            let buses = map.get(currStop) || [];
            for (let bus of buses) {
                if (ride[bus]) continue;
                ride[bus] = true;
                for (let stop of routes[bus]) {
                    if (stop === target) return step;
                    if (visited[stop]) continue;
                        queue.push(stop);
                }
            }
        }
    }
    
    return -1;
};