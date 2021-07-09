import { gql } from '@apollo/client';

export const QUERY_MATCHUPS = gql`
  query getMatchUps {
    matchups {

    }
  }
`;

export const QUERY_MATCHUP = gql`
  query getMatchUp {
    matchup {

    }
  }
`;

export const QUERY_TECH = gql`
  query getAllTech {
    allTech {

    }
  }
`;
