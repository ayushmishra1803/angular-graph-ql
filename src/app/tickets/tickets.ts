import { gql } from 'apollo-angular';

export const query = gql`
  {
    company {
      ceo
      coo
      cto
      founded
    }
  }
`;
