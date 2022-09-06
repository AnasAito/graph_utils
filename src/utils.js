const { path } = require("ramda");

function formatPaths(result) {
  // paths : list of paths for each src,target
  // verify if paths  have same length
  path_logger = [];
  org_map = [
    "company",
    "fund",
    "non_profit_organization",
    "educational_institution",
    "government_organization",
  ];
  let len = result["g_rev"].map((path_list) =>
    path_list.map((path) => {
      path_logger.push(path);
      return path.length;
    })
  );
  len = result["g"].map((path_list) =>
    path_list.map((path) => {
      path_logger.push(path);
      return path.length;
    })
  );

  let min_cost = Math.min(...path_logger.map((path) => path.length));
  path_logger = path_logger.filter((path) => path.length == min_cost);
  // zip edges
  let x_len = path_logger.length;
  let y_len = min_cost;
  let agg_path = Array();
  for (let i = 0; i < y_len; i++) {
    let source_list = [];
    let target_list = [];
    let edge_types_list = [];
    for (let j = 0; j < x_len; j++) {
      let source = path_logger[j][i]["fromNode"];
      let target = path_logger[j][i]["toNode"];
      let edge_types = path_logger[j][i]["edge_types"];
      if (source == "organization") {
        source = org_map;
      } else {
        source = [source];
      }
      if (target == "organization") {
        target = org_map;
      } else {
        target = [target];
      }
      source_list.push.apply(source_list, source);
      target_list.push.apply(target_list, target);
      edge_types_list.push.apply(edge_types_list, edge_types);
    }
    let agg_edge = {
      fromNode: [...new Set(source_list)],
      toNode: [...new Set(target_list)],
      edge_types: [...new Set(edge_types_list)],
    };
    agg_path.push(agg_edge);
  }
  return agg_path;
  
}
module.exports = { formatPaths };
