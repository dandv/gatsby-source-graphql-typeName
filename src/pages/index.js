import React from 'react';
import { graphql } from 'gatsby';

// This query is executed at build time by Gatsby.
export const GatsbyQuery = graphql`
  {
    myRemoteGqlSource {
      publicFilters {
        id
        name
      }
    }
  }
`;

export default ({ data }) => {
  console.log(data);
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
