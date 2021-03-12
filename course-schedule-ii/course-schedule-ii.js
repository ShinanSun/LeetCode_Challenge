/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let visited = new Set();
    let visiting = new Set();
    let graph = new Map();
    
    for (var i = 0; i < numCourses; i++) {
        graph.set(i, [])
    }
    for (let [c, p] of prerequisites) {
        var arr = graph.get(p);
        arr.push(c)

    } 

    for (let course of graph.keys()) {
        if (!DFS(course)) {
            return []
        }
    }
   

    return [...visited].reverse()
  
    function DFS(c) {
        
        
        if (visited.has(c)) {
            return true;
        }
        if (visiting.has(c)) {
            return false
        }
        
        visiting.add(c)
        let edges = graph.get(c);
        if (edges) {
            for (let course of edges) {
                if (!DFS(course)) return false;
            }
        }
        
        visiting.delete(c);
        visited.add(c);
        return true;
    }

};