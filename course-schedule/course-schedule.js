/**
 Topological sorting with DFS O(n);
 for each node: 
 if there is a solo node; don't care
 if any node, (dfs(node) === cycle) return false
 otherwise return true at the end;
 
 dfs(node): 
    if node is marked as visited; return true;
    if node is marked as visiting; return false;
    
mark node as visiting
for each childNode in node's childrens; if dfs(childNode)===cycle return cycle;
otherwise mark it as visited and return true;

 */

var canFinish = function(numCourses, prerequisites) {
    let visited = new Set()
    let visiting = new Set()
    let graph = new Map();
    
    for (let [c, p] of prerequisites) {
        if (graph.has(p)) {
            var nodes = graph.get(p);
            nodes.push(c)
        } else {
            graph.set(p, [c])
        }
    }

    for (let course of graph.keys()) {
        if (DFS(course) === false) {
            return false
        }
    }
    return true;
    
    
    function DFS (c) {
      if (visited.has(c)) return true;
      if (visiting.has(c)) return false;
      visiting.add(c);
      var edges = graph.get(c);
        
        if (edges) {     
          for (let child of edges) {
            
            if (!DFS(child)) return false;
         
            } 
          
        } 
        
        visiting.delete(c);
        visited.add(c)
        return true     
       
    }
      
};




