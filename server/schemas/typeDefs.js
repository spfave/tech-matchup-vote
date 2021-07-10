const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }

  type Matchup {
    _id: ID
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    tech: [Tech]!
    matchups: [Matchup]
    matchup(matchupID: ID!): Matchup
  }

  type Mutation {
    addMatchup(tech1: String!, tech2: String!): Matchup
    addVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
