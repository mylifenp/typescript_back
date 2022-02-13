import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    suppliers: [Supplier!]!
    supplier(id: ID!): Supplier!
  }
  extend type Mutation {
    addSupplier(input: SupplierInput): AddSupplierResult!
    updateSupplier(id: ID!, input: SupplierInput): UpdateSupplierResult!
    deleteSupplier(id: ID!): DeleteSupplierResult
  }
  type DeleteSupplierResult {
    status: Boolean!
  }
  type AddSupplierResult {
    success: Boolean!
    supplier: Supplier!
  }
  type UpdateSupplierResult {
    success: Boolean!
    supplier: Supplier!
  }
  type Supplier {
    id: ID!
    name: String!
    url: String
    sensors: [Sensor]
  }
  input SupplierInput {
    name: String!
    url: String
  }
`;
