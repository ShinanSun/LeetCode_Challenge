// Dijkstra's algorithms
//first, we will write a weighted graph
class WeightedGraph {
  constructor() {
    this.adjacentList = {};
  }

  addVetex(vetex) {
    if (!this.adjacentList[vetex]) this.adjacentList[vetex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacentList[v1].push({ node: v2, weight });
    this.adjacentList[v2].push({ node: v1, weight });
  }
}

var map = new WeightedGraph();
map.addVetex('a');
map.addVetex('b');
map.addVetex('c');
map.addEdge('a', 'b', 3);
map.addEdge('a', 'c', 4);
map.addEdge('c', 'b', 5);
console.log(map);
