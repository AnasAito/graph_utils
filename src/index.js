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

  // TODO
  // PATH_TO_QUERY
  query = `
  MATCH (source)-[:is_executive_in|is_board_member_in|is_founder_of|is_inventor_of|is_advisor_in|attended|is_author_of|is_employee_in]-(_n1)-[:is_associated_with|is_mentioned_in]-(interm)-[:is_mentioned_in]-(target0 {id:'fab9d1ce-e318-4db5-8d2a-a765852a3e8e'})
WHERE (source:person)
  AND (_n1:non_profit_organization OR _n1:educational_institution OR _n1:company OR _n1:fund OR _n1:government_organization OR _n1:scientific_paper OR _n1:patent)
  AND (interm:scientific_concept)
  AND (target0:scientific_paper OR target0:patent)
WITH DISTINCT source, _n1, interm, target0
WITH DISTINCT source, target0
WITH target0, COUNT(*) AS count
WITH target0.id AS target0_id, target0.name AS target0_name, count
RETURN target0_id, target0_name, count
`;
});

app.listen(8080);
