import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    complete(id: ID!): Complete!
  }
  type Complete {
    id: ID!
    name: String!
  }
`;
