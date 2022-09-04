const Graph = require("node-dijkstra");
class MetaGraph {
  constructor(data) {
    this.data = data;
  }

  getNeighbors(src_name) {
    return this.data["edges"].filter((edge) => edge["source"] === src_name);
  }
  getShortPath(src_name, tgt_name, edges_to_include = "all") {
    let data_to_use = [];
    if (edges_to_include !== "all")
      data_to_use = this.data["edges"].filter(
        (edge) => edge["edge_type"] in edges_to_include
      );
    else data_to_use = this.data["edges"];
    const route = new Graph();
    // aggragte by src node
    for (const idx in this.data["vertices"]) {
      let node = this.data["vertices"][idx];
      // prepare neighbors
      let edges = data_to_use.filter((edge) => edge["source"] === node);
      let neighbors = {};
      for (const edge_id in edges) {
        neighbors[edges[edge_id]["target"]] = 1;
      }

      route.addNode(node, neighbors);
    }

    return route.path(src_name, tgt_name);
  }
}

module.exports = MetaGraph;

//const square = new MetaGraph(graph_data);
//console.log(square.get_neighbors('person'));
