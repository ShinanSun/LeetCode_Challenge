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

// creating a priority Queue to quickly return the smallest node
class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(node, priority) {
    this.nodes.push({ node, priority });
    this.sort;
  }
  sort() {
    this.nodes.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.nodes.shift();
  }
}

/*
Dijkstra's Algo PseudoCode
input: starting and ending vertex;
create an object(distances) each key to be every vertex, value to be infinity, starting vetex's value to be 0
add each vertex with its priority value into the priorityQueue
Create an object(previousPath) and set key to be every vertex and value to be null;
looping though the priority queue, while PQ.length is not 0;
  dequeue a vertex named Curr (this is the shortest vertex from A)
  if the curr === ending vertex; we are done
  otherwise loop through all the neighbors of curr
  calculate the distance from Starting Vetex to curr's neighbor, if smaller than stored value in Distance Object, update it;
    update PreviousPath; 
    dequeue again....  
*/
