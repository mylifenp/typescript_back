import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    shutterTypes: [ShutterType!]!
    shutterType(id: ID!): ShutterType!
  }
  extend type Mutation {
    addShutterType(input: ShutterTypeInput): AddShutterTypeResult!
    updateShutterType(
      id: ID!
      input: ShutterTypeInput
    ): UpdateShutterTypeResult!
    deleteShutterType(id: ID!): DeleteShutterTypeResult
  }
  type DeleteShutterTypeResult {
    success: Boolean!
  }
  type AddShutterTypeResult {
    success: Boolean!
    shutterType: ShutterType!
  }
  type UpdateShutterTypeResult {
    success: Boolean!
    shutterType: ShutterType!
  }
  type ShutterType {
    id: ID!
    name: String!
  }
  input ShutterTypeInput {
    name: String!
  }
`;
