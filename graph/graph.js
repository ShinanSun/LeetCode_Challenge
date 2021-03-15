/* what is graph? graph is collections of nodes and connections/relationship between these nodes.
different than trees, all nodes in graph are treated equally, no perticular starting point. 
uses of graph:
-social nextworking
-google map
-recommendations 
-------------------------------------
basic terminology of Graph
vertex - node
edges - connections between nodes
undirected graph - no direction associate with edges.   e.g facebook friendship graph
directed graph - direction in decleared in edges.  e.g Instagram Followership Graph
weighed Graph: edges between nodes are weighed, or in another word, have values. Example: a google map. 
unweighted Graph: don't have values in edges.

---------------------------------------
adjancy matrix
adjancy list 
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVetex(vetex) {
    if (this.adjacencyList[vetex]) return;
    this.adjacencyList[vetex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (edge) => edge !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (edge) => edge !== v1
    );
  }

  removeVetex(vetex) {
    this.adjacencyList[vetex].forEach((edge) => {
      this.removeEdge(vetex, edge);
    });

    delete this.adjacencyList[vetex];
  }
}
