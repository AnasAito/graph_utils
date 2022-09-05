const Graph = require("node-dijkstra");
const R = require("ramda");
class MetaGraph {
  constructor(data) {
    this.data = data;
  }

  getNeighbors(src_name) {
    return this.data["edges"].filter((edge) => edge["source"] === src_name);
  }
  getEdge(src_name, tgt_name, edges_to_include = "all") {
    let edges = [];
    if (edges_to_include === "all") {
      edges = this.data["edges"].filter(
        (edge) => (edge["source"] === src_name) & (edge["target"] === tgt_name)
      );
    } else {
      edges = this.data["edges"].filter(
        (edge) =>
          (edge["source"] === src_name) &
          (edge["target"] === tgt_name) &
          edges_to_include.includes(edge["type"])
      );
    }
    return edges.map((edge) => edge["edge_type"]);
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

    let path = route.path(src_name, tgt_name);
    let triplets = R.aperture(2, path);
    return triplets.map((triplet) => [
      triplet[0],
      triplet[1],
      this.getEdge(triplet[0], triplet[1]),
    ]);
  }
}

module.exports = MetaGraph;

//const graph = new MetaGraph(graph_data);
//console.log(graph.get_neighbors('person'));
