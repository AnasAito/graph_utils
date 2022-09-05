const express = require("express");
const graph = require("./graph");
const MetaGraph = require("./metaGraph");
const app = express();
app.set("json spaces", 2);
const metaGraph = new MetaGraph(graph["graph"]);
//console.log();

app.get("/", (req, res) => {
  // res.json(metaGraph.getNeighbors("person"));

  let result = metaGraph.find_paths(
    ["scientific_paper"],
    ["scientific_concept"],
    ''
  );
  // ),
  //};

  res.json(result);
});

app.listen(8080);
