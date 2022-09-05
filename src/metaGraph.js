const graphlib = require("graphlib");
const ksp = require("k-shortest-path");
class MetaGraph {
  constructor(data) {
    this.data = data;
  }

  getNeighbors(src_name) {
    return this.data["edges"].filter((edge) => edge["source"] === src_name);
  }

  getEdge(src_name, tgt_name, edges_to_include = "all") {
    if (edges_to_include === "all") {
      let edges_list = this.data["edges"].filter((edge) => {
        // console.log(edge);
        return (edge["source"] === src_name) & (edge["target"] === tgt_name);
      });
      return edges_list.map((edge) => edge["edge_type"]);
    } else {
      let edges_list = this.data["edges"].filter(
        (edge) =>
          (edge["source"] === src_name) &
          (edge["target"] === tgt_name) &
          edges_to_include.includes(edge["type"])
      );
      return edges_list.map((edge) => edge["edge_type"]);
    }
  }

  getAllShortPath(src_name, tgt_name, edges_to_include = "all", flag = false) {
    console.log("debug", src_name, tgt_name, flag);
    let data_to_use = [];

    if (edges_to_include !== "all")
      data_to_use = this.data["edges"].filter((edge) =>
        edges_to_include.includes(edge["edge_type"])
      );
    else data_to_use = this.data["edges"];
    let g = new graphlib.Graph();
    for (const idx in data_to_use) {
      let src = data_to_use[idx]["source"];
      let tgt = data_to_use[idx]["target"];

      g.setEdge(src, tgt, 1);
      g.setEdge(tgt, src, 1);
    }
    // find all paths

    let paths = ksp.ksp(g, src_name, tgt_name, 20);

    // return only shortest paths
    let min_cost = Math.min(...paths.map((path) => path["totalCost"]));

    let sh_paths = paths.filter((path) => path["totalCost"] == min_cost);

    sh_paths = sh_paths
      .filter((path) => this.is_valid_path(path, flag))
      .map((path) =>
        path["edges"].map((triplet) => {
          return {
            fromNode: triplet["fromNode"],
            toNode: triplet["toNode"],
            edge_types:
              this.getEdge(triplet["fromNode"], triplet["toNode"]).length == 0
                ? this.getEdge(triplet["toNode"], triplet["fromNode"])
                : this.getEdge(triplet["fromNode"], triplet["toNode"]),
          };
        })
      );
    return sh_paths;
  }
  is_valid_path(path, flag) {
    if (flag) {
      // get all nodes
      // console.log(flag);
      let flagged_edges = path["edges"].filter(
        (triplet) => triplet["fromNode"] == flag || triplet["toNode"] == flag
      );

      return flagged_edges.length == 0;
    } else {
      return true;
    }
  }
  cartesian = (...a) =>
    a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));

  computePaths(
    source_name,
    target_name,
    interm_name,
    edges_to_include = "all"
  ) {
    if (interm_name) {
      // paths src to interm
      // paths interm to target
      // combinations
      console.log(source_name, target_name);

      let flag = target_name;

      let paths_a = this.getAllShortPath(
        source_name,
        interm_name,
        edges_to_include,
        flag
      );
      flag = source_name;
      let paths_b = this.getAllShortPath(
        interm_name,
        target_name,
        edges_to_include,
        flag
      );
      // console.log(paths_b);

      let all_paths = this.cartesian(paths_a, paths_b);
      return all_paths.map((path, idx) => {
        let key = `path_${idx}`;
        return { [key]: path };
      });
    } else {
      let all_paths = this.getAllShortPath(
        source_name,
        target_name,
        edges_to_include,
        false
      );

      return all_paths.map((path, idx) => {
        let key = `path_${idx}`;
        return { [key]: path };
      });
    }
  }
  find_paths(source_list, target_list, interm_name, edges_to_include = "all") {
    // compute src tgt combinations
    let pairs = this.cartesian(source_list, target_list);
    return pairs.map((pair) => {
      return {
        [`${pair[0]}_${pair[1]}`]: this.computePaths(
          pair[0],
          pair[1],
          interm_name,
          edges_to_include
        ),
      };
    });
  }
}

module.exports = MetaGraph;

//const graph = new MetaGraph(graph_data);
//console.log(graph.get_neighbors('person'));
