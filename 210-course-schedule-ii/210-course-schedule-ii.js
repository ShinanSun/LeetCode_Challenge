/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //edges;
    if (numCourses === 0) return [];
   
    if (prerequisites.length === 0) {
        let ret = [];
        for (let i = 0; i < numCourses; i++) {
            ret.push(i)
        }
        return ret;
    }
    //build the graph;
    let map = new Array(numCourses).fill(0).map(() => new Array());
    for (let [c, pre] of prerequisites) {
        map[pre].push(c);
    }
  
    let res = [];
    let visiting = {}
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i, res, map, visiting)) return [];
    }
    return res.reverse();
};
    //visiting[c] = true, currently c under visiting. 
    //visiting[c] = false; c finish visiting.
    //visiting[c] = undefined; never been visit 
//Post Order DFS
const dfs = function(c, res, courseMap, visiting) {

    if (visiting[c] !== undefined) return visiting[c];
    
    visiting[c] = true;
    
    for (let neighbor of courseMap[c]) {
        if (dfs(neighbor, res, courseMap, visiting)) return true;
    }
    res.push(c);
  
    visiting[c] = false;
    return false;
}