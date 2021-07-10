import { gql } from '@apollo/client';

export const QUERY_MATCHUPS = gql`
  query matchups {
    matchups {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_MATCHUP = gql`
  query matchup($matchupID: ID!) {
    matchup(matchupID: $matchupID) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_TECH = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;
