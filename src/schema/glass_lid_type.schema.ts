import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    glassLidTypes: [GlassLidType!]!
    glassLidType(id: ID!): GlassLidType!
  }
  extend type Mutation {
    addGlassLidType(input: GlassLidTypeInput): AddGlassLidTypeResult!
    updateGlassLidType(
      id: ID!
      input: GlassLidTypeInput
    ): UpdateGlassLidTypeResult!
    deleteGlassLidType(id: ID!): DeleteGlassLidTypeResult
  }
  type DeleteGlassLidTypeResult {
    success: Boolean!
  }
  type AddGlassLidTypeResult {
    success: Boolean!
    glassLidType: GlassLidType!
  }
  type UpdateGlassLidTypeResult {
    success: Boolean!
    glassLidType: GlassLidType!
  }
  type GlassLidType {
    id: ID!
    name: String!
  }
  input GlassLidTypeInput {
    name: String!
  }
`;
