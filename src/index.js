const express = require("express");
const graph = require("./graph");
const MetaGraph = require("./metaGraph");
const app = express();
const metaGraph = new MetaGraph(graph["graph"]);
//console.log();

app.get("/", (req, res) => {
  // res.json(metaGraph.getNeighbors("person"));
  res.json(metaGraph.getShortPath("person", "disease"));
});

app.listen(8080);
