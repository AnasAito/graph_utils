const express = require("express");
const graph = require("./graph");
const graph_rev = require("./graph_reversed");
const MetaGraph = require("./metaGraph");
const Utils = require("./utils");
const app = express();
app.set("json spaces", 2);
const metaGraph = new MetaGraph(graph["graph"]);
const metaGraphRev = new MetaGraph(graph_rev["graph_rev"]);
//console.log();

app.get("/", (req, res) => {
  // res.json(metaGraph.getNeighbors("person"));

  let paths = metaGraph.find_paths(
    ["scientific_paper", "patent"],
    ["person"],
    "scientific_concept"
  );
  let paths_rev = metaGraphRev.find_paths(
    ["scientific_paper", "patent"],
    ["person"],
    "scientific_concept"
  );
  // ),
  //};

  res.json(Utils.formatPaths({ g: paths, g_rev: paths_rev }));
});

app.listen(8080);
