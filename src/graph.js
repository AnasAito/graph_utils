const graph = {
  edges: [
    { source: "person", target: "company", edge_type: "is_founder_of" },
    { source: "person", target: "fund", edge_type: "is_founder_of" },
    {
      source: "person",
      target: "educational_institution",
      edge_type: "is_founder_of"
    },
    {
      source: "person",
      target: "company",
      edge_type: "is_board_member_in"
    },
    { source: "person", target: "fund", edge_type: "is_board_member_in" },
    {
      source: "person",
      target: "educational_institution",
      edge_type: "is_board_member_in"
    },
    { source: "person", target: "company", edge_type: "is_employee_in" },
    { source: "person", target: "fund", edge_type: "is_employee_in" },
    {
      source: "person",
      target: "educational_institution",
      edge_type: "is_employee_in"
    },
    { source: "person", target: "company", edge_type: "is_executive_in" },
    { source: "person", target: "fund", edge_type: "is_executive_in" },
    {
      source: "person",
      target: "educational_institution",
      edge_type: "is_executive_in"
    },
    { source: "person", target: "company", edge_type: "is_advisor_in" },
    { source: "person", target: "fund", edge_type: "is_advisor_in" },
    {
      source: "person",
      target: "educational_institution",
      edge_type: "is_advisor_in"
    },
    { source: "person", target: "company", edge_type: "is_member_of" },
    { source: "person", target: "fund", edge_type: "is_member_of" },
    {
      source: "person",
      target: "educational_institution",
      edge_type: "is_member_of"
    },
    {
      source: "person",
      target: "educational_institution",
      edge_type: "attended"
    },
    {
      source: "person",
      target: "funding_round",
      edge_type: "participated_in"
    },
    {
      source: "organization",
      target: "funding_round",
      edge_type: "participated_in"
    },
    {
      source: "organization",
      target: "funding_round",
      edge_type: "raised"
    },
    { source: "company", target: "company", edge_type: "acquired" },
    { source: "company", target: "fund", edge_type: "acquired" },
    {
      source: "company",
      target: "educational_institution",
      edge_type: "acquired"
    },
    { source: "fund", target: "company", edge_type: "acquired" },
    { source: "fund", target: "fund", edge_type: "acquired" },
    {
      source: "fund",
      target: "educational_institution",
      edge_type: "acquired"
    },
    {
      source: "educational_institution",
      target: "company",
      edge_type: "acquired"
    },
    {
      source: "educational_institution",
      target: "fund",
      edge_type: "acquired"
    },
    {
      source: "educational_institution",
      target: "educational_institution",
      edge_type: "acquired"
    },
    { source: "company", target: "company", edge_type: "invested_in" },
    { source: "company", target: "fund", edge_type: "invested_in" },
    {
      source: "company",
      target: "educational_institution",
      edge_type: "invested_in"
    },
    { source: "fund", target: "company", edge_type: "invested_in" },
    { source: "fund", target: "fund", edge_type: "invested_in" },
    {
      source: "fund",
      target: "educational_institution",
      edge_type: "invested_in"
    },
    {
      source: "educational_institution",
      target: "company",
      edge_type: "invested_in"
    },
    {
      source: "educational_institution",
      target: "fund",
      edge_type: "invested_in"
    },
    {
      source: "educational_institution",
      target: "educational_institution",
      edge_type: "invested_in"
    },
    { source: "company", target: "company", edge_type: "is_similar_to" },
    { source: "company", target: "fund", edge_type: "is_similar_to" },
    {
      source: "company",
      target: "educational_institution",
      edge_type: "is_similar_to"
    },
    { source: "fund", target: "company", edge_type: "is_similar_to" },
    { source: "fund", target: "fund", edge_type: "is_similar_to" },
    {
      source: "fund",
      target: "educational_institution",
      edge_type: "is_similar_to"
    },
    {
      source: "educational_institution",
      target: "company",
      edge_type: "is_similar_to"
    },
    {
      source: "educational_institution",
      target: "fund",
      edge_type: "is_similar_to"
    },
    {
      source: "educational_institution",
      target: "educational_institution",
      edge_type: "is_similar_to"
    },
    {
      source: "company",
      target: "company",
      edge_type: "is_sub_organization_of"
    },
    {
      source: "company",
      target: "fund",
      edge_type: "is_sub_organization_of"
    },
    {
      source: "company",
      target: "educational_institution",
      edge_type: "is_sub_organization_of"
    },
    {
      source: "fund",
      target: "company",
      edge_type: "is_sub_organization_of"
    },
    {
      source: "fund",
      target: "fund",
      edge_type: "is_sub_organization_of"
    },
    {
      source: "fund",
      target: "educational_institution",
      edge_type: "is_sub_organization_of"
    },
    {
      source: "educational_institution",
      target: "company",
      edge_type: "is_sub_organization_of"
    },
    {
      source: "educational_institution",
      target: "fund",
      edge_type: "is_sub_organization_of"
    },
    {
      source: "educational_institution",
      target: "educational_institution",
      edge_type: "is_sub_organization_of"
    },
    {
      source: "person",
      target: "scientific_paper",
      edge_type: "is_author_of"
    },
    {
      source: "organization",
      target: "patent",
      edge_type: "is_assignee_of"
    },
    { source: "person", target: "patent", edge_type: "is_assignee_of" },
    { source: "person", target: "patent", edge_type: "is_inventor_of" },
    { source: "organization", target: "drug", edge_type: "manufactures" },
    { source: "compound", target: "drug", edge_type: "is_ingredient_of" },
    {
      source: "organization",
      target: "vaccine",
      edge_type: "manufactures"
    },
    {
      source: "compound",
      target: "vaccine",
      edge_type: "is_ingredient_of"
    },
    {
      source: "disease",
      target: "target",
      edge_type: "is_associated_with"
    },
    { source: "disease", target: "target", edge_type: "targets" },
    { source: "compound", target: "disease", edge_type: "has_effect_on" },
    { source: "domain", target: "domain", edge_type: "is_parent_of" },
    {
      source: "domain",
      target: "scientific_concept",
      edge_type: "is_parent_of"
    },
    {
      source: "scientific_concept",
      target: "domain",
      edge_type: "is_parent_of"
    },
    {
      source: "scientific_concept",
      target: "scientific_concept",
      edge_type: "is_parent_of"
    },
    { source: "domain", target: "domain", edge_type: "is_similar_to" },
    {
      source: "domain",
      target: "scientific_concept",
      edge_type: "is_similar_to"
    },
    {
      source: "scientific_concept",
      target: "domain",
      edge_type: "is_similar_to"
    },
    {
      source: "scientific_concept",
      target: "scientific_concept",
      edge_type: "is_similar_to"
    },
    { source: "disease", target: "disease", edge_type: "is_parent_of" },
    {
      source: "patent",
      target: "patent",
      edge_type: "is_application_parent_of"
    },
    { source: "patent", target: "patent", edge_type: "is_similar_to" },
    {
      source: "organization",
      target: "scientific_concept",
      edge_type: "is_associated_with"
    },
    {
      source: "organization",
      target: "domain",
      edge_type: "is_associated_with"
    },
    {
      source: "company",
      target: "target",
      edge_type: "is_associated_with"
    },
    {
      source: "company",
      target: "disease",
      edge_type: "is_associated_with"
    },
    {
      source: "company",
      target: "compound",
      edge_type: "is_associated_with"
    },
    {
      source: "company",
      target: "drug",
      edge_type: "is_associated_with"
    },
    {
      source: "company",
      target: "vaccine",
      edge_type: "is_associated_with"
    },
    { source: "fund", target: "target", edge_type: "is_associated_with" },
    {
      source: "fund",
      target: "disease",
      edge_type: "is_associated_with"
    },
    {
      source: "fund",
      target: "compound",
      edge_type: "is_associated_with"
    },
    { source: "fund", target: "drug", edge_type: "is_associated_with" },
    {
      source: "fund",
      target: "vaccine",
      edge_type: "is_associated_with"
    },
    {
      source: "educational_institution",
      target: "target",
      edge_type: "is_associated_with"
    },
    {
      source: "educational_institution",
      target: "disease",
      edge_type: "is_associated_with"
    },
    {
      source: "educational_institution",
      target: "compound",
      edge_type: "is_associated_with"
    },
    {
      source: "educational_institution",
      target: "drug",
      edge_type: "is_associated_with"
    },
    {
      source: "educational_institution",
      target: "vaccine",
      edge_type: "is_associated_with"
    },
    {
      source: "scientific_concept",
      target: "publication",
      edge_type: "is_mentioned_in"
    },
    {
      source: "domain",
      target: "publication",
      edge_type: "is_mentioned_in"
    },
    {
      source: "medical_entity",
      target: "publication",
      edge_type: "is_mentioned_in"
    },
    {
      source: "scientific_paper",
      target: "scientific_paper",
      edge_type: "is_similar_to"
    }
  ],
  vertices: [
    "company",
    "organization",
    "educational_institution",
    "funding_round",
    "compound",
    "vaccine",
    "medical_entity",
    "scientific_concept",
    "drug",
    "domain",
    "publication",
    "fund",
    "patent",
    "scientific_paper",
    "person",
    "target",
    "disease"
  ]
};

module.exports = {
  graph
};
