const express = require("express");
const graph = require("./graph");
const MetaGraph = require("./metaGraph");
const app = express();
const metaGraph = new MetaGraph(graph["graph"]);
//console.log();

app.get("/", (req, res) => {
  res.send("test");
  console.log(metaGraph.getNeighbors("person"));
  console.log(metaGraph.getShortPath("person", "disease"));
});

app.listen(8080);
